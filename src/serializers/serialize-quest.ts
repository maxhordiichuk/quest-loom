import { Quest } from '@/db/types'
import { fetchImage } from '@/db/queries'
import { serializeImage } from '@/serializers/serialize-image'

type QuestProp = {
  id: string
  title: string
  description: string | null
  imageKey: string | null
}

export async function serializeQuest(quest: QuestProp): Promise<Quest> {
  const image = await fetchImage(quest.imageKey)

  return {
    id: quest.id,
    title: quest.title,
    description: quest.description,
    image: serializeImage(image),
  }
}
