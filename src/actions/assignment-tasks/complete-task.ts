'use server'

import { revalidatePath } from 'next/cache'

import paths from '@/lib/paths'
import { assignmentNotFound, cannotCompleteTask, incorrectCode } from '@/actions/errors'
import { checkTaskCode, completeTask as doCompleteTask } from '@/services'
import { completeTaskSchema } from '@/schema'
import { fetchAssignment } from '@/db/queries'
import type { CompleteTaskAction } from '@/types/requests'

export const completeTask: CompleteTaskAction = async body => {
  let assignment

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

    return { errors: { root: [cannotCompleteTask] } }
  }

  revalidatePath(paths.assignmentShow(assignment.id))

  return {}
}
