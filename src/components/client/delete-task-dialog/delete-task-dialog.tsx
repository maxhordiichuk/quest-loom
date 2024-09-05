import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'

import type { Task } from '@/db/types'
import type { deleteTask } from '@/actions'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export interface DeleteTaskDialogProps {
  task: Task
  deleteAction: typeof deleteTask
  children?: React.ReactNode
}

export function DeleteTaskDialog({ task, deleteAction, children }: DeleteTaskDialogProps) {
  const [isOpen, setOpen] = useState(false)
  const [formState, deleteTaskAction] = useFormState(deleteAction, {})

  useEffect(() => {
    if (!formState) {
      setOpen(false)
    }
  }, [formState])

  if (!formState) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-h-[96%] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-red-600">Delete task</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete the task {task.title}?
        </DialogDescription>
        <DialogFooter>
          <form action={deleteTaskAction}>
            <input type="hidden" name="id" value={task.id} />
            <Button variant="destructive" type="submit">
              Delete task
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
