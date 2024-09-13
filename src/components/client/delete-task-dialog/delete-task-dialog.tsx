import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { useErrorToast } from '@/hooks/use-error-toast'
import type { DeleteTaskAction } from '@/types/requests'
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
  deleteTask: DeleteTaskAction
  children?: React.ReactNode
}

export function DeleteTaskDialog({ task, deleteTask, children }: DeleteTaskDialogProps) {
  const [isOpen, setOpen] = useState(false)
  const { toastErrors } = useErrorToast()
  const router = useRouter()

  const handleDelete = async () => {
    const result = await deleteTask({ id: task.id })

    if (!result.success) {
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
