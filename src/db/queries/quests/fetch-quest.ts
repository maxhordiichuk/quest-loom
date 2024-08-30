import { db } from '@/db'

interface FetchQuestProps {
  questId: string
  userId: string
}

export function fetchQuest({ questId, userId }: FetchQuestProps) {
  return db.quest.findFirst({
    where: { id: questId, userId },
    include: {
      cover: {
        select: { key: true, metadata: true },
      },
    },
  })
}
