'use server'

import paths from '@/lib/paths'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { createTask as createTaskService } from '@/services'
import { failedToCreateTask, questNotFound } from '@/actions/errors'
import { fetchQuest } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'

import type { TaskFormState } from './types'

const createPostSchema = z.object({
  title: z.string().min(3),
  description: z.string(),
  code: z.string(),
  questId: z.string(),
  imageKey: z.string().optional(),
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
    questId: formData.get('questId'),
    imageKey: formData.get('imageKey'),
  })

  if (!schemaResult.success) {
    return { errors: schemaResult.error.flatten().fieldErrors }
  }

  const quest = await fetchQuest({ id: schemaResult.data.questId, userId: user.id })

  if (!quest) {
    return { errors: { _form: [questNotFound] } }
  }

  try {
    await createTaskService(schemaResult.data)
  } catch (error) {
    console.error(error)

    return { errors: { _form: [failedToCreateTask] } }
  }

  return redirect(paths.questShow(quest.id))
}
