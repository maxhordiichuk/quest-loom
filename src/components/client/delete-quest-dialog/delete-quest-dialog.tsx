import type { Quest } from '@/db/types'
import type { deleteQuest } from '@/actions'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export interface DeleteQuestDialogProps {
  quest: Quest
  deleteAction: typeof deleteQuest
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DeleteQuestDialog({
  quest,
  deleteAction,
  open,
  onOpenChange,
}: DeleteQuestDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[96%] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-red-600">Delete quest</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete the quest {quest.title}?
        </DialogDescription>
        <DialogFooter>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={quest.id} />
            <Button variant="destructive" type="submit">
              Delete quest
            </Button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
