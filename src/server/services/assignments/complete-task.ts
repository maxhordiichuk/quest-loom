import type { Assignment } from '@prisma/client'

import { db } from '@/server/db'

interface CompleteTaskProps {
  assignment: Assignment
}

export async function completeTask({ assignment }: CompleteTaskProps) {
  if (!assignment.taskAssignmentId) {
    throw new Error('Task assignment not found')
  }

  const taskAssignment = await db.taskAssignment.findFirstOrThrow({
    where: { id: assignment.taskAssignmentId },
  })

  const task = await db.task.findFirstOrThrow({ where: { id: taskAssignment.taskId } })

  const quest = await db.quest.findFirstOrThrow({ where: { id: assignment.questId } })

  const nextTask = await db.task.findFirst({
    where: { questId: quest.id, order: { gt: task.order } },
    orderBy: { order: 'asc' },
  })

  if (!nextTask) {
    await db.$transaction(async tx => {
      await tx.taskAssignment.update({
        where: { id: taskAssignment.id },
        data: { completedAt: new Date() },
      })

      await db.assignment.update({
        where: { id: assignment.id },
        data: {
          completedAt: new Date(),
          taskAssignmentId: null,
        },
      })
    })

    return
  }

  await db.$transaction(async tx => {
    await tx.taskAssignment.update({
      where: { id: taskAssignment.id },
      data: { completedAt: new Date() },
    })

    const nextTaskAssignment = await tx.taskAssignment.create({
      data: {
        taskId: nextTask.id,
        assignmentId: assignment.id,
      },
    })

    await tx.assignment.update({
      where: { id: assignment.id },
      data: { taskAssignmentId: nextTaskAssignment.id },
    })
  })
}
