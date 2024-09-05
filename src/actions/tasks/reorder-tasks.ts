'use server'

import { z } from 'zod'

import paths from '@/lib/paths'
import { notFound, redirect } from 'next/navigation'

import { getAuthenticatedSession } from '@/lib/auth'

import { fetchTask } from '@/db/queries'
import { reorderTasks as reorderTasksService } from '@/services'

const reorderTasksSchema = z.object({
  id: z.string(),
  oldIndex: z.number(),
  newIndex: z.number(),
})

export async function reorderTasks(props: z.infer<typeof reorderTasksSchema>) {
  const { user } = await getAuthenticatedSession()

  const { id, newIndex, oldIndex } = reorderTasksSchema.parse(props)

  const task = await fetchTask({ id, userId: user.id })

  if (!task) {
    return notFound()
  }

  try {
    await reorderTasksService({ task, oldIndex, newIndex })
  } catch (error) {
    console.error(error)
  }

  return redirect(paths.questShow(task.questId))
}
