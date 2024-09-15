import { useMutation } from 'react-query'
import { useState } from 'react'

import { createAssignment } from '@/lib/client'
import { useErrorToast } from '@/hooks/use-error-toast'
import type { Assignment, Quest } from '@/types/models/creator'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export interface ShareQuestDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  quest: Quest
  children?: React.ReactNode
}

export function ShareQuestDialog({ open, onOpenChange, quest, children }: ShareQuestDialogProps) {
  const { toastErrors } = useErrorToast()
  const [assignment, setAssignment] = useState<Assignment | null>(null)
  const { mutateAsync, isLoading } = useMutation(createAssignment)

  const handleSubmit = async () => {
    const result = await mutateAsync(quest.id)

    if (result.errors) {
      toastErrors(result.errors)
      return
    }

    setAssignment(result)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent className="max-h-[96%] overflow-auto">
        <DialogHeader>
          <DialogTitle>Share Quest</DialogTitle>
        </DialogHeader>
        <DialogDescription>Share the {quest.title} quest with your friends</DialogDescription>
        <div className="pt-4">
          {assignment ? (
            <input
              type="text"
              value={assignment.url}
              readOnly
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          ) : (
            <Button onClick={handleSubmit} loading={isLoading}>
              Share Quest
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
