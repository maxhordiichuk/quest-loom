'use server'

import paths from '@/lib/paths'
import { Quest } from '@prisma/client'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { createQuest as createQuestService } from '@/services'
import { getSession } from '@/lib/auth'

import { QuestFormState } from './types'

const createPostSchema = z.object({
  title: z.string().min(3),
  description: z.string(),
  coverKey: z.string(),
})

export async function createQuest(
  _formState: QuestFormState,
  formData: FormData
): Promise<QuestFormState> {
  const session = await getSession()

  if (!session || !session.user) {
    return { errors: { _form: ['You must be signed in to do this'] } }
  }

  const schemaResult = createPostSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    coverKey: formData.get('coverKey'),
  })

  if (!schemaResult.success) {
    return { errors: schemaResult.error.flatten().fieldErrors }
  }

  let quest: Quest

  try {
    quest = await createQuestService({ ...schemaResult.data, userId: session.user.id })
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message)
    }

    return { errors: { _form: ['Failed to create a post'] } }
  }

  return redirect(paths.questShow(quest.id))
}
