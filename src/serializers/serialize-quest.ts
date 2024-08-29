import { Quest } from '@/db/types'
import { getFileUrl } from '@/lib/aws'

export type QuestProp = {
  id: string
  title: string
  description: string | null
  points: number
  isCompleted: boolean
  cover: {
    key: string
  } | null
}

export async function serializeQuest(quest: QuestProp): Promise<Quest> {
  if (!quest.cover) {
    return quest as Quest
  }

  const coverUrl = await getFileUrl(quest.cover.key)

  return {
    id: quest.id,
    title: quest.title,
    description: quest.description,
    points: quest.points,
    isCompleted: quest.isCompleted,
    cover: {
      key: quest.cover.key,
      url: coverUrl,
    },
  }
}
