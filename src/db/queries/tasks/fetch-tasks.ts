import { db } from '@/db'

interface FetchTasksProps {
  questId: string
}

export function fetchTasks({ questId }: FetchTasksProps) {
  return db.task.findMany({
    where: { questId },
    include: {
      image: {
        select: { key: true, metadata: true },
      },
    },
    orderBy: { order: 'asc' },
  })
}
