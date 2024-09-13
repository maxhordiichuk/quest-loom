import { useMutation } from 'react-query'
import { useState } from 'react'

import { createAssignment } from '@/client'
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

interface ShareQuestDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  quest: Quest
  children?: React.ReactNode
}

export function ShareQuestDialog({ open, onOpenChange, quest, children }: ShareQuestDialogProps) {
  const [assignment, setAssignment] = useState<Assignment | null>(null)
  const { mutateAsync } = useMutation(createAssignment)

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const result = await mutateAsync({ questId: quest.id })
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
            <Button onClick={handleSubmit}>Share Quest</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
