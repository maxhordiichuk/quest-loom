import { useFormState } from 'react-dom'

import type { startAssignment as startAssignmentAction } from '@/server/actions'

import { SubmitButton } from '../submit-button'

export interface StartButtonProps {
  assignmentId: string
  startAssignment: typeof startAssignmentAction
}

export function StartButton({ assignmentId, startAssignment }: StartButtonProps) {
  const [state, formAction] = useFormState(startAssignment.bind(null, assignmentId), { error: '' })

  return (
    <form action={formAction}>
      {state.error && (
        <div className="mb-8 p-4 bg-red-100 text-red-800 rounded-lg">{state.error}</div>
      )}
      <SubmitButton />
    </form>
  )
}
