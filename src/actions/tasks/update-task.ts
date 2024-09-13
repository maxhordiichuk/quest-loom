'use server'

import { updateTask as doUpdateTask } from '@/services'
import { failedToUpdateTask, taskNotFound } from '@/actions/errors'
import { fetchTask } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import { updateTaskSchema } from '@/schema'
import type { UpdateTaskAction } from '@/types/requests'

export const updateTask: UpdateTaskAction = async body => {
  try {
    const { user } = await getAuthenticatedSession()

    const result = updateTaskSchema.safeParse(body)

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors }
    }

    const task = await fetchTask({ id: result.data.id, userId: user.id })

    if (!task) {
      return { success: false, errors: { root: [taskNotFound] } }
    }

    await doUpdateTask(task.id, result.data)

    return { success: true, questId: task.questId }
  } catch (error) {
    console.error(error)

    return { success: false, errors: { root: [failedToUpdateTask] } }
  }
}
