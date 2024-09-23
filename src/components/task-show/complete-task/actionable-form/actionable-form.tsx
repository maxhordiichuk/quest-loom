import { useFormState } from 'react-dom'

import { codeHint, completeTaskLabel } from '@/components/task-show/lib'
import type { completeTask as completeTaskAction } from '@/server/actions'

import { Input } from '@/components/ui/input'
import { SubmitButton } from '@/components/submit-button'

interface ActionableFormProps {
  assignmentId: string
  completeTask: typeof completeTaskAction
}

export function ActionableForm({ assignmentId, completeTask }: ActionableFormProps) {
  const [state, formAction] = useFormState(completeTask.bind(null, assignmentId), { error: '' })

  if (!state) {
    window.location.reload()
  }

  return (
    <form action={formAction}>
      <p className="mb-2 text-sm text-muted-foreground">{codeHint}</p>

      <Input type="text" name="code" placeholder="12345678" className="font-mono" />

      {state.error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">{state.error}</div>
      )}

      <SubmitButton className="mt-4">{completeTaskLabel}</SubmitButton>
    </form>
  )
}
