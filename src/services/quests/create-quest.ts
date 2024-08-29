import { db } from '@/db'

import { createImage } from '../images/create-image'

export interface CreateQuestProps {
  title: string
  description: string
  userId: string
  coverKey?: string
}

export async function createQuest({ title, description, coverKey, userId }: CreateQuestProps) {
  const cover = coverKey ? await createImage({ key: coverKey, userId }) : null

  return db.quest.create({ data: { title, description, userId, coverId: cover?.id } })
}
