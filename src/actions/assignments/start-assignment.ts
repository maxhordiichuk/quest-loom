'use server'

import paths from '@/lib/paths'
import { notFound, redirect } from 'next/navigation'

import { failedToStartAssignment } from '@/actions/errors'
import { fetchAssignment } from '@/db/queries'
import { startAssignment as startAssignmentService } from '@/services'

interface StartAssignmentFormState {
  errors?: string[]
}

export async function startAssignment(
  _formState: StartAssignmentFormState,
  formData: FormData
): Promise<StartAssignmentFormState> {
  const id = formData.get('id')

  if (!id || typeof id !== 'string') {
    return notFound()
  }

  const assignment = await fetchAssignment({ id })

  if (!assignment) {
    return notFound()
  }

  try {
    await startAssignmentService({ assignment })
  } catch (error) {
    console.error(error)

    return { errors: [failedToStartAssignment] }
  }

  return redirect(paths.assignmentShow(id))
}
