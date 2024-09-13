import { fetchImage } from '@/db/queries'
import type { Quest } from '@/types/models/player'

import { serializeImage } from '../common'

type QuestProp = {
  title: string
  description: string | null
  imageKey: string | null
}

export async function serializeQuest(quest: QuestProp): Promise<Quest> {
  const image = await fetchImage(quest.imageKey)

  return {
    title: quest.title,
    description: quest.description,
    image: serializeImage(image),
  }
}
