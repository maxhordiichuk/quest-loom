import { db } from '@/db'

interface FetchQuestListProps {
  userId: string
}

export function fetchQuestList({ userId }: FetchQuestListProps) {
  return db.quest.findMany({
    where: { userId },
    include: {
      cover: {
        select: { key: true, metadata: true },
      },
    },
  })
}
