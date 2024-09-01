import { db } from '@/db'

import { createImage } from '../images/create-image'

export interface CreateTaskProps {
  title: string
  description: string
  code: string
  imageKey?: string
  userId: string
  questId: string
}

export async function createTask({
  title,
  description,
  code,
  imageKey,
  userId,
  questId,
}: CreateTaskProps) {
  const image = imageKey ? await createImage({ key: imageKey, userId }) : null
  const order = await db.task.count({ where: { questId } })

  return db.task.create({
    data: {
      title,
      description,
      code,
      order,
      questId,
      imageId: image?.id,
    },
  })
}
