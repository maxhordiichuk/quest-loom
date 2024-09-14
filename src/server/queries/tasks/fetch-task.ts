import { db } from '@/server/db'

interface FetchTaskProps {
  id: string
  userId: string
}

export function fetchTask({ id, userId }: FetchTaskProps) {
  return db.task.findFirst({
    where: { id, quest: { userId } },
  })
}
