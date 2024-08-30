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
    metadata: {
      width: number
      height: number
    }
  } | null
}

export async function serializeQuest(quest: QuestProp): Promise<Quest> {
  if (!quest.cover) {
    return quest as Quest
  }

  const { cover } = quest
  const coverUrl = await getFileUrl(cover.key)

  return {
    id: quest.id,
    title: quest.title,
    description: quest.description,
    points: quest.points,
    isCompleted: quest.isCompleted,
    cover: {
      key: cover.key,
      url: coverUrl,
      width: cover.metadata.width,
      height: cover.metadata.height,
    },
  }
}
