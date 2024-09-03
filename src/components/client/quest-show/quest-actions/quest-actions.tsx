import Link from 'next/link'
import { ChevronDown, Edit, Eye, Trash2 } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import paths from '@/lib/paths'

import { Button } from '@/components/ui/button'

export interface QuestActionsProps {
  questId: string
}

export function QuestActions({ questId }: QuestActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <span>Actions</span>
          <ChevronDown className="h-4 w-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={paths.questShow(questId)}>
          <DropdownMenuItem>
            <Eye className="mr-2 h-4 w-4" />
            <span>View details</span>
          </DropdownMenuItem>
        </Link>
        <Link href={paths.questEdit(questId)}>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Edit</span>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="text-destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
