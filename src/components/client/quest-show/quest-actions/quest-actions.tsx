'use client'

import Link from 'next/link'
import { ChevronDown, Edit, Eye, Share, Trash2 } from 'lucide-react'
import { useState } from 'react'

import paths from '@/lib/paths'
import type { DeleteQuestAction } from '@/types/requests/delete-quest'
import type { Quest } from '@/types/models/creator'

import { Button } from '@/components/ui/button'
import { DeleteQuestDialog } from '@/components/client/delete-quest-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ShareQuestDialog } from '@/components/client/share-quest-dialog'

export interface QuestActionsProps {
  quest: Quest
  deleteQuest: DeleteQuestAction
}

export function QuestActions({ quest, deleteQuest }: QuestActionsProps) {
  const [isDeleting, setDeleting] = useState(false)
  const [isSharing, setSharing] = useState(false)

  const handleDelete = () => {
    setDeleting(true)
  }

  const handleShare = () => {
    setSharing(true)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            <span>Actions</span>
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem className="text-primary-foreground" onClick={handleShare}>
            <Share className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuItem>
          <Link href={paths.questShow(quest.id)}>
            <DropdownMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              <span>View details</span>
            </DropdownMenuItem>
          </Link>
          <Link href={paths.questEdit(quest.id)}>
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="text-destructive" onClick={handleDelete}>
            <Trash2 className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isDeleting && (
        <DeleteQuestDialog
          quest={quest}
          deleteQuest={deleteQuest}
          open={isDeleting}
          onOpenChange={setDeleting}
        />
      )}

      {isSharing && <ShareQuestDialog quest={quest} open={isSharing} onOpenChange={setSharing} />}
    </>
  )
}
