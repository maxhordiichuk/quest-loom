import { fetchImage } from '@/db/queries'
import type { Task } from '@/db/types'

import { serializeImage } from './serialize-image'

type TaskProp = {
  id: string
  title: string
  description: string | null
  code: string
  order: number
  imageKey: string | null
}

export async function serializeTask(task: TaskProp): Promise<Task> {
  const image = await fetchImage(task.imageKey)

  return {
    id: task.id,
    title: task.title,
    description: task.description,
    code: task.code,
    order: task.order,
    image: serializeImage(image),
  }
}
