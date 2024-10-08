import type { Task } from '@prisma/client'

import { db } from '@/server/db'

import { deleteImage } from '../images/delete-image'

export async function deleteTask(task: Task) {
  await Promise.all([
    db.task.delete({ where: { id: task.id } }),
    db.task.updateMany({
      where: { order: { gt: task.order }, questId: task.questId },
      data: { order: { decrement: 1 } },
    }),
    task.imageKey && deleteImage(task.imageKey),
  ])
}
