import getConfig from 'next/config'
import { Assignment } from '@prisma/client'

import paths from '@/lib/paths'
import { Assignment as PublicAssignment } from '@/db/types'

const { publicRuntimeConfig: config } = getConfig()

export function serializeAssignment(assignment: Assignment): PublicAssignment {
  return {
    id: assignment.id,
    completedAt: assignment.completedAt,
    url: `${config.host}${paths.assignmentShow(assignment.id)}`,
  }
}
