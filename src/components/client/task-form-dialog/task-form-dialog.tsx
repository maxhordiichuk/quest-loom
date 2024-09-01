'use client'

import { useState } from 'react'

import type { Task } from '@/db/types'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TaskForm } from '@/components/client/task-form'
import type { createTask } from '@/actions'

export interface TaskFormDialogProps {
  title: string
  task?: Task
  questId: string
  formAction: typeof createTask
  children: React.ReactNode
}

export function TaskFormDialog({
  title,
  task,
  questId,
  formAction,
  children,
}: TaskFormDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-[96%] overflow-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>Fill in the form below to create a new task</DialogDescription>
        <div className="pt-4">
          <TaskForm
            task={task}
            questId={questId}
            formAction={formAction}
            onSuccess={() => setOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
