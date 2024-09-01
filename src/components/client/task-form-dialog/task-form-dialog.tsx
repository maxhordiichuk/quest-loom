import type { Task } from '@/db/types'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TaskForm } from '@/components/client/task-form'
import type { createTask } from '@/actions'

export interface TaskFormDialogProps {
  title: string
  task?: Task
  formAction: typeof createTask
  children: React.ReactNode
}

export function TaskFormDialog({ title, task, formAction, children }: TaskFormDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="pt-4">
          <TaskForm task={task} formAction={formAction} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
