'use server'

import { createTaskSchema } from '@/schema'
import { createTask as doCreateTask } from '@/services'
import { failedToCreateTask, questNotFound } from '@/actions/errors'
import { fetchQuest } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import type { CreateTaskAction } from '@/types/requests'

export const createTask: CreateTaskAction = async body => {
  try {
    const { user } = await getAuthenticatedSession()

    const result = createTaskSchema.safeParse(body)

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors }
    }

    const quest = await fetchQuest({ id: result.data.questId, userId: user.id })

    if (!quest) {
      return { success: false, errors: { root: [questNotFound] } }
    }

    await doCreateTask(result.data)

    return { success: true }
  } catch (error) {
    console.error(error)

    return { success: false, errors: { root: [failedToCreateTask] } }
  }
}
