import { notFound } from 'next/navigation'

import { fetchTask } from '@/db/queries'
import { serializeTask } from '@/serializers'

import { TaskShow as ClientTaskShow } from '@/components/client/task-show'

export interface TaskShowProps {
  taskId: string
  userId: string
}

export async function TaskShow({ taskId, userId }: TaskShowProps) {
  const task = await fetchTask({ taskId, userId })

  if (!task) {
    return notFound()
  }

  const serializedTask = await serializeTask(task)

  return <ClientTaskShow task={serializedTask} />
}
