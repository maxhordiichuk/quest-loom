'use server'

import paths from '@/lib/paths'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { failedToUpdateTask, taskNotFound } from '@/actions/errors'
import { fetchTask } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import { updateTask as updateTaskService } from '@/services'

import { TaskFormState } from './types'

const updateTaskSchema = z.object({
  id: z.string(),
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  code: z.string().optional(),
  imageKey: z.string().optional(),
})

export async function updateTask(
  _formState: TaskFormState,
  formData: FormData
): Promise<TaskFormState> {
  const { user } = await getAuthenticatedSession()

  const schemaResult = updateTaskSchema.safeParse({
    id: formData.get('id'),
    title: formData.get('title'),
    description: formData.get('description'),
    code: formData.get('code'),
    imageKey: formData.get('imageKey'),
  })

  if (!schemaResult.success) {
    return { errors: schemaResult.error.flatten().fieldErrors }
  }

  const task = await fetchTask({ taskId: schemaResult.data.id, userId: user.id })

  if (!task) {
    return { errors: { _form: [taskNotFound] } }
  }

  try {
    await updateTaskService(task.id, schemaResult.data)
  } catch (error) {
    console.error(error)

    return { errors: { _form: [failedToUpdateTask] } }
  }

  return redirect(paths.questShow(task.questId))
}
