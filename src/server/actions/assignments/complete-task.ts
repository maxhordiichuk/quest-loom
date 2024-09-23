'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import type { Assignment } from '@prisma/client'

import paths from '@/lib/paths'
import { assignmentNotFound, failedToCompleteTask, incorrectCode } from '@/server/errors'
import { checkTaskCode, completeTask as doCompleteTask } from '@/server/services'
import { fetchAssignment } from '@/server/queries'

interface CompleteTaskState {
  error?: string
}

// eslint-disable-next-line consistent-return
export async function completeTask(
  assignmentId: string,
  _formState: CompleteTaskState,
  formData: FormData
) {
  let assignment: Assignment | null

  try {
    const code = formData.get('code')

    if (typeof code !== 'string') {
      return { error: failedToCompleteTask }
    }

    assignment = await fetchAssignment({ id: assignmentId })

    if (!assignment) {
      return { error: assignmentNotFound }
    }

    const isCodeCorrect = await checkTaskCode({ assignment, code })

    if (!isCodeCorrect) {
      return { error: incorrectCode }
    }

    await doCompleteTask({ assignment })

    revalidatePath(paths.assignmentShow(assignmentId))
  } catch (error) {
    console.error(error)

    return { error: failedToCompleteTask }
  }

  redirect(paths.assignmentShow(assignmentId))
}
