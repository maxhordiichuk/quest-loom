'use server'

import paths from '@/lib/paths'
import { Quest } from '@prisma/client'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { getAuthenticatedSession } from '@/lib/auth'
import { updateQuest as updateQuestService } from '@/services'

import { QuestFormState } from './types'

const updateQuestSchema = z.object({
  id: z.string(),
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  coverKey: z.string().optional().nullable(),
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
    coverKey: formData.get('coverKey'),
  })

  if (!schemaResult.success) {
    return { errors: schemaResult.error.flatten().fieldErrors }
  }

  let quest: Quest

  try {
    quest = await updateQuestService({ ...schemaResult.data, userId: user.id })
  } catch (err: unknown) {
    console.error(err)

    return { errors: { _form: ['Failed to update a quest'] } }
  }

  return redirect(paths.questShow(quest.id))
}
