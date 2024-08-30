import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Edit, Eye, MoreVertical, Trash2 } from 'lucide-react'

import paths from '@/lib/paths'

import { Button } from '@/components/ui/button'

export interface ActionsMenuProps {
  questId: string
}

export function ActionsMenu({ questId }: ActionsMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreVertical className="h-4 w-4" />
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
