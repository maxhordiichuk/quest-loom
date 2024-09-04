import { db } from '@/db'

interface FetchTaskProps {
  taskId: string
  userId: string
}

export function fetchTask({ taskId, userId }: FetchTaskProps) {
  return db.task.findFirst({
    where: { id: taskId, quest: { userId } },
  })
}
