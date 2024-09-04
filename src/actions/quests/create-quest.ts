'use server'

import paths from '@/lib/paths'
import { Quest } from '@prisma/client'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { createQuest as createQuestService } from '@/services'
import { failedToCreateQuest } from '@/actions/errors'
import { getAuthenticatedSession } from '@/lib/auth'

import { QuestFormState } from './types'

const createQuestSchema = z.object({
  title: z.string().min(3),
  description: z.string(),
  imageKey: z.string(),
})

export async function createQuest(
  _formState: QuestFormState,
  formData: FormData
): Promise<QuestFormState> {
  const { user } = await getAuthenticatedSession()

  const schemaResult = createQuestSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    imageKey: formData.get('imageKey'),
  })

  if (!schemaResult.success) {
    return { errors: schemaResult.error.flatten().fieldErrors }
  }

  let quest: Quest

  try {
    quest = await createQuestService({ ...schemaResult.data, userId: user.id })
  } catch (error) {
    console.error(error)

    return { errors: { _form: [failedToCreateQuest] } }
  }

  return redirect(paths.questShow(quest.id))
}
