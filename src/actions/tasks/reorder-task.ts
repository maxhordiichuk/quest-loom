'use server'

import { couldNotReorderTasks, taskNotFound } from '@/actions/errors'
import { reorderTasks as doReorderTasks } from '@/services'
import { fetchTask } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import { reorderTaskSchema } from '@/schema'
import type { ReorderTaskAction } from '@/types/requests'

export const reorderTask: ReorderTaskAction = async body => {
  try {
    const { user } = await getAuthenticatedSession()

    const { id, newIndex, oldIndex } = reorderTaskSchema.parse(body)

    const task = await fetchTask({ id, userId: user.id })

    if (!task) {
      return { success: false, errors: [taskNotFound] }
    }

    await doReorderTasks({ task, oldIndex, newIndex })

    return { success: true }
  } catch (error) {
    console.error(error)

    return { success: false, errors: [couldNotReorderTasks] }
  }
}
