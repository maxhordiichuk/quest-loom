'use server'

import paths from '@/lib/paths'
import { notFound, redirect } from 'next/navigation'

import { getAuthenticatedSession } from '@/lib/auth'

import { deleteTask as deleteTaskService } from '@/services'
import { fetchTask } from '@/db/queries'

export async function deleteTask(_formState: object, formData: FormData) {
  const { user } = await getAuthenticatedSession()
  const id = formData.get('id')

  if (!id || typeof id !== 'string') {
    return notFound()
  }

  const task = await fetchTask({ id, userId: user.id })

  if (!task) {
    return notFound()
  }

  try {
    await deleteTaskService(task)
  } catch (error) {
    console.error(error)
  }

  return redirect(paths.questShow(task.questId))
}
