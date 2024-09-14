import { db } from '@/server/db'

interface CreateAssignmentProps {
  questId: string
}

export function createAssignment({ questId }: CreateAssignmentProps) {
  return db.assignment.create({ data: { questId } })
}
