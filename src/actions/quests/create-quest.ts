'use server'

import { createQuestSchema } from '@/schema'
import { createQuest as createQuestService } from '@/services'
import { failedToCreateQuest } from '@/actions/errors'
import { getAuthenticatedSession } from '@/lib/auth'
import type { CreateQuestAction } from '@/types/requests'

export const createQuest: CreateQuestAction = async body => {
  try {
    const { user } = await getAuthenticatedSession()

    const schemaResult = createQuestSchema.safeParse(body)

    if (!schemaResult.success) {
      return { success: false, errors: schemaResult.error.flatten().fieldErrors }
    }

    const quest = await createQuestService({ ...schemaResult.data, userId: user.id })

    return { success: true, questId: quest.id }
  } catch (error) {
    console.error(error)

    return { success: false, errors: { root: [failedToCreateQuest] } }
  }
}
