import { db } from '@/server/db'

import { TaskImageUploader } from '@/server/uploaders'

import { attachImage } from '../images/attach-image'

interface CreateTaskProps {
  title: string
  description: string
  code: string
  imageKey?: string | null
  questId: string
}

export async function createTask({ imageKey, ...data }: CreateTaskProps) {
  const { title, description, code, questId } = data
  const order = await db.task.count({ where: { questId } })
  const task = await db.task.create({ data: { title, description, code, order, questId } })

  await attachImage(new TaskImageUploader(task), imageKey)
}
