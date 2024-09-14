import { db } from '@/server/db'

interface FetchQuestsProps {
  userId: string
}

export function fetchQuests({ userId }: FetchQuestsProps) {
  return db.quest.findMany({
    where: { userId },
    include: {
      cover: {
        select: { key: true, metadata: true },
      },
    },
  })
}
