import { useState } from 'react'

import type { CompleteTaskAction } from '@/types/requests'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { CompleteTaskForm } from './complete-task-form'

export interface DeleteQuestDialogProps {
  assignmentId: string
  completeTask: CompleteTaskAction
  children: React.ReactNode
}

export function CompleteTaskDialog({
  assignmentId,
  completeTask,
  children,
}: DeleteQuestDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

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
