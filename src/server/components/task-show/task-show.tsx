import { notFound } from 'next/navigation'

import { fetchTask } from '@/server/queries'
import { serializeTask } from '@/server/serializers/creator'

import { TaskShow as ClientTaskShow } from '@/components/task-show'

export interface TaskShowProps {
  id: string
  userId: string
}

export async function TaskShow({ id, userId }: TaskShowProps) {
  const task = await fetchTask({ id, userId })

  if (!task) {
    return notFound()
  }

  const serializedTask = await serializeTask(task)

  return <ClientTaskShow task={serializedTask} />
}
