import type { Task } from '@prisma/client'

import { db } from '@/db'

interface ReorderTasksProps {
  task: Task
  oldIndex: number
  newIndex: number
}

export async function reorderTasks({ task, oldIndex, newIndex }: ReorderTasksProps) {
  if (oldIndex === newIndex || oldIndex < 0 || newIndex < 0) {
    return
  }

  await db.$transaction([
    db.task.updateMany({
      where: {
        questId: task.questId,
        order: {
          gte: Math.min(newIndex, oldIndex),
          lte: Math.max(newIndex, oldIndex),
        },
      },
      data: {
        order: { increment: newIndex > oldIndex ? -1 : 1 },
      },
    }),
    db.task.update({ where: { id: task.id }, data: { order: newIndex } }),
  ])
}
