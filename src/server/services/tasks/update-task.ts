import { db } from '@/server/db'

import { TaskImageUploader } from '@/server/uploaders'

import { attachImage } from '../images/attach-image'

interface UpdateTaskData {
  title?: string
  description?: string
  code?: string
  imageKey?: string | null
}

export async function updateTask(id: string, data: UpdateTaskData) {
  const { title, description, code, imageKey } = data

  const task = await db.task.update({
    where: { id },
    data: { title, description, code },
  })

  return attachImage(new TaskImageUploader(task), imageKey)
}
