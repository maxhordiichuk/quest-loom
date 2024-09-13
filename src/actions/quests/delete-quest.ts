'use server'

import { deleteQuestSchema } from '@/schema'
import { deleteQuest as doDeleteQuest } from '@/services'
import { failedToDeleteQuest, questNotFound } from '@/actions/errors'
import { fetchQuest } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import type { DeleteQuestAction } from '@/types/requests'

export const deleteQuest: DeleteQuestAction = async body => {
  try {
    const { user } = await getAuthenticatedSession()

    const { id } = deleteQuestSchema.parse(body)

    const quest = await fetchQuest({ id, userId: user.id })

    if (!quest) {
      return { success: false, errors: [questNotFound] }
    }

    await doDeleteQuest(quest)

    return { success: true }
  } catch (error) {
    console.error(error)

    return { success: false, errors: [failedToDeleteQuest] }
  }
}
