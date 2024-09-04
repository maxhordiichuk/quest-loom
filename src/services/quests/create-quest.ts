import { db } from '@/db'

import { QuestImageUploader } from '@/uploaders'
import { attachImage } from '@/services/images/attach-image'

export interface CreateQuestProps {
  title: string
  description: string
  userId: string
  imageKey?: string
}

export async function createQuest({ imageKey, ...data }: CreateQuestProps) {
  const { title, description, userId } = data
  const quest = await db.quest.create({ data: { title, description, userId } })

  return attachImage(new QuestImageUploader(quest), imageKey)
}
