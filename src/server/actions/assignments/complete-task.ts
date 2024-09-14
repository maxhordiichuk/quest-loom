'use server'

import { revalidatePath } from 'next/cache'
import type { Assignment } from '@prisma/client'

import paths from '@/lib/paths'
import { assignmentNotFound, failedToCompleteTask, incorrectCode } from '@/server/errors'
import { checkTaskCode, completeTask as doCompleteTask } from '@/server/services'
import { completeTaskSchema } from '@/schema'
import { fetchAssignment } from '@/server/queries'
import type { CompleteTaskAction } from '@/types/requests'

export const completeTask: CompleteTaskAction = async body => {
  let assignment: Assignment | null

  try {
    const result = completeTaskSchema.safeParse(body)

    if (!result.success) {
      return { errors: result.error.flatten().fieldErrors }
    }

    const { assignmentId, code } = result.data

    assignment = await fetchAssignment({ id: assignmentId })

    if (!assignment) {
      return { errors: { root: [assignmentNotFound] } }
    }

    const isCodeCorrect = await checkTaskCode({ assignment, code })

    if (!isCodeCorrect) {
      return { errors: { code: [incorrectCode] } }
    }

    await doCompleteTask({ assignment })
  } catch (error) {
    console.error(error)

    return { errors: { root: [failedToCompleteTask] } }
  }

  revalidatePath(paths.assignmentShow(assignment.id))

  return {}
}
