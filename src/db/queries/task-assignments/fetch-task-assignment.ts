import { db } from '@/db'

interface FetchTaskAssignmentProps {
  id: string
}

export function fetchTaskAssignment({ id }: FetchTaskAssignmentProps) {
  return db.taskAssignment.findFirst({
    where: { id },
    include: { task: true },
  })
}
