import getConfig from 'next/config'
import { Assignment as PrismaAssignment } from '@prisma/client'

import paths from '@/lib/paths'
import type { Assignment } from '@/types/models/creator'

const { publicRuntimeConfig: config } = getConfig()

export function serializeAssignment(assignment: PrismaAssignment): Assignment {
  return {
    id: assignment.id,
    completedAt: assignment.completedAt,
    url: `${config.host}${paths.assignmentShow(assignment.id)}`,
  }
}
