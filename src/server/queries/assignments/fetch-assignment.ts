import { db } from '@/server/db'

interface FetchAssignmentProps {
  id: string
}

export function fetchAssignment({ id }: FetchAssignmentProps) {
  return db.assignment.findFirst({ where: { id } })
}
