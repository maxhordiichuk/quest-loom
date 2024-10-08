import { db } from '@/server/db'

interface FetchQuestProps {
  id: string
  userId?: string
}

export function fetchQuest({ id, userId }: FetchQuestProps) {
  return db.quest.findFirst({ where: { id, userId } })
}
