import { useState } from 'react'

import type { CompleteTaskAction } from '@/types/requests'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { completeTaskLabel } from './lib'

import { CompleteTaskForm } from './complete-task-form'

export interface DeleteQuestDialogProps {
  assignmentId: string
  completeTask: CompleteTaskAction
}

export function CompleteTaskDialog({ assignmentId, completeTask }: DeleteQuestDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="px-8">{completeTaskLabel}</Button>
      </DialogTrigger>

      <DialogContent className="max-h-[96%] overflow-auto">
        <DialogHeader>
          <DialogTitle>Complete task</DialogTitle>
        </DialogHeader>

        <DialogDescription>Please enter the code to complete the task.</DialogDescription>

        <CompleteTaskForm
          assignmentId={assignmentId}
          completeTask={completeTask}
          onSuccess={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  )
}
