import { getFileUrl } from '@/lib/aws'
import type { Task } from '@/db/types'

type TaskProp = {
  id: string
  title: string
  description: string | null
  code: string
  order: number
  image: {
    key: string
    metadata: {
      width: number
      height: number
    }
  } | null
}

export async function serializeTask(task: TaskProp): Promise<Task> {
  if (!task.image) {
    return task as Task
  }

  const { image } = task
  const imageUrl = await getFileUrl(image.key)

  return {
    id: task.id,
    title: task.title,
    description: task.description,
    code: task.code,
    order: task.order,
    image: {
      key: image.key,
      url: imageUrl,
      width: image.metadata.width,
      height: image.metadata.height,
    },
  }
}
