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
import { createTask, updateTask } from '@/actions'

export interface TaskFormDialogProps {
  title: string
  task?: Task
  questId?: string
  formAction: typeof createTask | typeof updateTask
  children?: React.ReactNode
}

export function TaskFormDialog({
  title,
  task,
  questId,
  formAction,
  children,
}: TaskFormDialogProps) {
  const [isOpen, setOpen] = useState(false)

  const close = () => {
    setOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-h-[96%] overflow-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>Fill in the form below to create a new task</DialogDescription>
        <div className="pt-4">
          <TaskForm task={task} questId={questId} formAction={formAction} onSuccess={close} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
