'use server'

import { z } from 'zod'

import { updateQuest as doUpdateQuest } from '@/services'
import { failedToUpdateQuest, questNotFound } from '@/actions/errors'
import { fetchQuest } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import type { UpdateQuestAction } from '@/types/requests'

const updateQuestSchema = z.object({
  id: z.string(),
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  imageKey: z.string().optional(),
})

export const updateQuest: UpdateQuestAction = async body => {
  try {
    const { user } = await getAuthenticatedSession()

    const result = updateQuestSchema.safeParse(body)

    if (!result.success) {
      return { success: false, errors: result.error.flatten().fieldErrors }
    }

    const quest = await fetchQuest({ id: result.data.id, userId: user.id })

    if (!quest) {
      return { success: false, errors: { root: [questNotFound] } }
    }

    await doUpdateQuest(quest.id, result.data)

    return { success: true, questId: quest.id }
  } catch (error) {
    console.error(error)

    return { success: false, errors: { root: [failedToUpdateQuest] } }
  }
}
