import { Task } from '@/types/models/player'
import { fetchImage } from '@/server/queries'

import { serializeImage } from '../common'

type TaskProp = {
  title: string
  description: string | null
  order: number
  imageKey: string | null
}

export async function serializeTask(task: TaskProp): Promise<Task> {
  const image = await fetchImage(task.imageKey)

  return {
    title: task.title,
    description: task.description,
    order: task.order,
    image: serializeImage(image),
  }
}
