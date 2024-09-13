'use client'

import { useState } from 'react'

import type { CreateTaskAction, UpdateTaskAction } from '@/types/requests'
import type { Task } from '@/types/models/creator'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { TaskForm } from '@/components/client/task-form'

export interface TaskFormDialogProps {
  title: string
  task?: Task
  questId?: string
  onSubmit: CreateTaskAction | UpdateTaskAction
  children?: React.ReactNode
}

export function TaskFormDialog({ title, task, questId, onSubmit, children }: TaskFormDialogProps) {
  const [isOpen, setOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-h-[96%] overflow-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>Fill in the form below to create a new task</DialogDescription>
        <div className="pt-4">
          <TaskForm
            task={task}
            questId={questId}
            onSubmit={onSubmit}
            onSuccess={() => setOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
