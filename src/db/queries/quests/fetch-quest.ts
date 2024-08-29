import { notFound } from 'next/navigation'

import { Quest } from '@/db/types'
import { db } from '@/db'
import { serializeQuest } from '@/serializers'

export async function fetchQuest(questId: string, userId: string): Promise<Quest> {
  const quest = await db.quest.findFirst({
    where: { id: questId, userId },
    include: {
      cover: { select: { key: true } },
    },
  })

  if (!quest) {
    return notFound()
  }

  return serializeQuest(quest)
}
