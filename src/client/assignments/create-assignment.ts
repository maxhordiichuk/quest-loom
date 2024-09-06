import paths from '@/lib/paths'
import type { Assignment } from '@/db/types'

interface CreateAssignmentProps {
  questId: string
}

export async function createAssignment({ questId }: CreateAssignmentProps): Promise<Assignment> {
  const response = await fetch(paths.apiAssignments, {
    method: 'POST',
    body: JSON.stringify({ questId }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to create assignment')
  }

  return response.json()
}
