'use server'

import { deleteTaskSchema } from '@/schema'
import { deleteTask as deleteTaskService } from '@/services'
import { failedToDeleteTask, taskNotFound } from '@/actions/errors'
import { fetchTask } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import type { DeleteTaskAction } from '@/types/requests'

export const deleteTask: DeleteTaskAction = async body => {
  try {
    const { user } = await getAuthenticatedSession()

    const { id } = deleteTaskSchema.parse(body)

    const task = await fetchTask({ id, userId: user.id })

    if (!task) {
      return { success: false, errors: [taskNotFound] }
    }

    await deleteTaskService(task)

    return { success: true }
  } catch (error) {
    console.error(error)

    return { success: false, errors: [failedToDeleteTask] }
  }
}
