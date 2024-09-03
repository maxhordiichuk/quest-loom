import { db } from '@/db'

import { createImage } from '../images/create-image'

export interface UpdateQuestProps {
  id: string
  title?: string
  description?: string
  userId: string
  coverKey?: string | null
}

async function getCoverId(coverKey: string | null | undefined, userId: string) {
  if (coverKey === null || coverKey === undefined) {
    return coverKey
  }

  const isCoverExist = (await db.attachment.count({ where: { key: coverKey } })) > 0

  if (isCoverExist) {
    return undefined
  }

  const cover = await createImage({ key: coverKey, userId })

  return cover.id
}

export async function updateQuest({ id, title, description, coverKey, userId }: UpdateQuestProps) {
  const coverId = await getCoverId(coverKey, userId)

  return db.quest.update({
    where: { id, userId },
    data: { title, description, coverId },
  })
}
