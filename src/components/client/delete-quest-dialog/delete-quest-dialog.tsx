import { useRouter } from 'next/navigation'

import paths from '@/lib/paths'
import { useErrorToast } from '@/hooks/use-error-toast'
import type { DeleteQuestAction } from '@/types/requests'
import type { Quest } from '@/types/models/creator'

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
  deleteQuest: DeleteQuestAction
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DeleteQuestDialog({
  quest,
  deleteQuest,
  open,
  onOpenChange,
}: DeleteQuestDialogProps) {
  const { toastErrors } = useErrorToast()
  const router = useRouter()

  const handleDelete = async () => {
    const result = await deleteQuest({ id: quest.id })

    if (!result.success) {
      toastErrors(result.errors)
      return
    }

    router.push(paths.home)
  }

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
          <Button variant="destructive" onClick={handleDelete}>
            Delete Quest
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
