import { db } from '@/db'
import type { Assignment } from '@prisma/client'

interface StartAssignmentProps {
  assignment: Assignment
}

export async function startAssignment({ assignment }: StartAssignmentProps) {
  if (!assignment.questId) {
    throw new Error('Quest not found')
  }

  const firstTask = await db.task.findFirstOrThrow({
    where: { questId: assignment.questId },
    orderBy: { order: 'asc' },
  })

  db.$transaction(async tx => {
    const taskAssignment = await tx.taskAssignment.create({
      data: {
        taskId: firstTask.id,
        assignmentId: assignment.id,
      },
    })

    await tx.assignment.update({
      where: { id: assignment.id },
      data: { taskAssignmentId: taskAssignment.id },
    })
  })
}
