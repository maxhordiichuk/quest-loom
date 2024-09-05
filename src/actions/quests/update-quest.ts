'use server'

import paths from '@/lib/paths'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { failedToUpdateQuest, questNotFound } from '@/actions/errors'
import { fetchQuest } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import { updateQuest as updateQuestService } from '@/services'

import { QuestFormState } from './types'

const updateQuestSchema = z.object({
  id: z.string(),
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  imageKey: z.string().optional(),
})

export async function updateQuest(
  _formState: QuestFormState,
  formData: FormData
): Promise<QuestFormState> {
  const { user } = await getAuthenticatedSession()

  const schemaResult = updateQuestSchema.safeParse({
    id: formData.get('id'),
    title: formData.get('title'),
    description: formData.get('description'),
    imageKey: formData.get('imageKey'),
  })

  if (!schemaResult.success) {
    return { errors: schemaResult.error.flatten().fieldErrors }
  }

  const quest = await fetchQuest({ id: schemaResult.data.id, userId: user.id })

  if (!quest) {
    return { errors: { _form: [questNotFound] } }
  }

  try {
    await updateQuestService(quest.id, schemaResult.data)
  } catch (error) {
    console.error(error)

    return { errors: { _form: [failedToUpdateQuest] } }
  }

  return redirect(paths.questShow(quest.id))
}
