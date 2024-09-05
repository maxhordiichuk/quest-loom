import { notFound } from 'next/navigation'

import { fetchTask } from '@/db/queries'
import { serializeTask } from '@/serializers'

import { TaskShow as ClientTaskShow } from '@/components/client/task-show'

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
