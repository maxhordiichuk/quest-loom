'use client'

import Link from 'next/link'
import { ChevronDown, Edit, Eye, Trash2 } from 'lucide-react'
import { useState } from 'react'

import paths from '@/lib/paths'
import type { Quest } from '@/db/types'
import type { deleteQuest } from '@/actions'

import { Button } from '@/components/ui/button'
import { DeleteQuestDialog } from '@/components/client/delete-quest-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export interface QuestActionsProps {
  quest: Quest
  deleteQuestAction: typeof deleteQuest
}

export function QuestActions({ quest, deleteQuestAction }: QuestActionsProps) {
  const [isDeleting, setDeleting] = useState(false)

  const handleDelete = () => {
    setDeleting(true)
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
          deleteAction={deleteQuestAction}
          open={isDeleting}
          onOpenChange={setDeleting}
        />
      )}
    </>
  )
}
