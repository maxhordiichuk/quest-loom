import { db } from '@/server/db'

import { QuestImageUploader } from '@/server/uploaders'

import { attachImage } from '../images/attach-image'

interface CreateQuestProps {
  title: string
  description: string
  userId: string
  imageKey?: string | null
}

export async function createQuest({ imageKey, ...data }: CreateQuestProps) {
  const { title, description, userId } = data
  const quest = await db.quest.create({ data: { title, description, userId } })

  return attachImage(new QuestImageUploader(quest), imageKey)
}
