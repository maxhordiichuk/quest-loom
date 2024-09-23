'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import paths from '@/lib/paths'
import { startAssignment as doStartAssignment } from '@/server/services'
import { failedToStartAssignment } from '@/server/errors'

interface StartAssignmentState {
  error?: string
  success?: boolean
}

// eslint-disable-next-line consistent-return
export async function startAssignment(
  id: string,
  _formState: StartAssignmentState,
  _formData: FormData
) {
  try {
    await doStartAssignment(id)
  } catch (error) {
    console.error(error)

    return { error: failedToStartAssignment }
  }

  revalidatePath(paths.assignmentShow(id))
  redirect(paths.assignmentShow(id))
}
