'use server'

import paths from '@/lib/paths'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { createTask as createTaskService } from '@/services'
import { fetchQuest } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'

import type { TaskFormState } from './types'

const createPostSchema = z.object({
  title: z.string().min(3),
  description: z.string(),
  code: z.string(),
  imageKey: z.string(),
  questId: z.string(),
})

export async function createTask(
  _formState: TaskFormState,
  formData: FormData
): Promise<TaskFormState> {
  const { user } = await getAuthenticatedSession()

  const schemaResult = createPostSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    code: formData.get('code'),
    imageKey: formData.get('imageKey'),
    questId: formData.get('questId'),
  })

  if (!schemaResult.success) {
    return { errors: schemaResult.error.flatten().fieldErrors }
  }

  const quest = await fetchQuest({ questId: schemaResult.data.questId, userId: user.id })

  if (!quest) {
    return { errors: { _form: ['Cannot find quest'] } }
  }

  try {
    await createTaskService({ ...schemaResult.data, questId: quest.id, userId: user.id })
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(err.message)
    }

    return { errors: { _form: ['Failed to create a task'] } }
  }

  return redirect(paths.questShow(quest.id))
}
