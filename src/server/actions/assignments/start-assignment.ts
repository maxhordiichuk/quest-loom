'use server'

import { startAssignment as doStartAssignment } from '@/server/services'
import { failedToStartAssignment } from '@/server/errors'
import { startAssignmentSchema } from '@/schema'
import type { StartAssignmentAction } from '@/types/requests'

export const startAssignment: StartAssignmentAction = async body => {
  try {
    const { id } = startAssignmentSchema.parse(body)

    await doStartAssignment(id)
  } catch (error) {
    console.error(error)

    return { errors: [failedToStartAssignment] }
  }

  return { success: true }
}
