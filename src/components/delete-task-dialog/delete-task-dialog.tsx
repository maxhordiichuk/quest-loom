import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { deleteTask } from '@/lib/client'
import { useErrorToast } from '@/hooks/use-error-toast'
import type { Task } from '@/types/models/creator'

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
  children?: React.ReactNode
}

export function DeleteTaskDialog({ task, children }: DeleteTaskDialogProps) {
  const [isOpen, setOpen] = useState(false)
  const { toastErrors } = useErrorToast()
  const router = useRouter()

  const handleDelete = async () => {
    const result = await deleteTask(task.id)

    if (result.errors) {
      toastErrors(result.errors)
      return
    }

    setOpen(false)
    router.refresh()
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
          <Button variant="destructive" onClick={handleDelete}>
            Delete Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
