'use server'

import { startAssignment as doStartAssignment } from '@/services'
import { failedToStartAssignment } from '@/actions/errors'
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
