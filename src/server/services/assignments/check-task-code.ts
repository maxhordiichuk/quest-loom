import type { Assignment } from '@prisma/client'

import { db } from '@/server/db'

interface CheckTaskCodeProps {
  assignment: Assignment
  code: string
}

export async function checkTaskCode({ assignment, code }: CheckTaskCodeProps) {
  if (!assignment.taskAssignmentId) {
    return false
  }

  const taskAssignment = await db.taskAssignment.findFirstOrThrow({
    where: {
      id: assignment.taskAssignmentId,
    },
    include: {
      task: {
        select: { code: true },
      },
    },
  })

  return taskAssignment.task.code === code
}
