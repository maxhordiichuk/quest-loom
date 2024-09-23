import type { completeTask as completeTaskAction } from '@/server/actions'

import { Input } from '@/components/ui/input'
import { SubmitButton } from '@/components/submit-button'

import { codeHint, completeTaskLabel } from '../lib'

import { ActionableForm } from './actionable-form'

interface CompleteTaskProps {
  assignmentId?: string
  completeTask?: typeof completeTaskAction
}

export function CompleteTask({ assignmentId, completeTask }: CompleteTaskProps) {
  if (assignmentId && completeTask) {
    return <ActionableForm assignmentId={assignmentId} completeTask={completeTask} />
  }

  return (
    <div>
      <p className="mb-2 text-sm text-muted-foreground">{codeHint}</p>

      <Input type="text" name="code" placeholder="12345678" className="font-mono" />

      <SubmitButton className="mt-4" disabled>
        {completeTaskLabel}
      </SubmitButton>
    </div>
  )
}
