import { db } from '@/server/db'

export async function startAssignment(id: string) {
  const assignment = await db.assignment.findFirstOrThrow({ where: { id } })

  const firstTask = await db.task.findFirstOrThrow({
    where: { questId: assignment.questId },
    orderBy: { order: 'asc' },
  })

  await db.$transaction(async tx => {
    const taskAssignment = await tx.taskAssignment.create({
      data: {
        taskId: firstTask.id,
        assignmentId: id,
      },
    })

    await tx.assignment.update({
      where: { id },
      data: { taskAssignmentId: taskAssignment.id },
    })
  })
}
