import { db } from '@/server/db'

import { QuestImageUploader } from '@/server/uploaders'

import { attachImage } from '../images/attach-image'

interface UpdateQuestData {
  title?: string
  description?: string
  imageKey?: string | null
}

export async function updateQuest(id: string, data: UpdateQuestData) {
  const { title, description, imageKey } = data

  const quest = await db.quest.update({
    where: { id },
    data: { title, description },
  })

  return attachImage(new QuestImageUploader(quest), imageKey)
}
