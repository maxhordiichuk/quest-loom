import Image from 'next/image'

import type { Task } from '@/db/types'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Edit, Eye, MoreVertical, Trash2 } from 'lucide-react'
import { PlaceholderImage } from '@/components/client/placeholder-image'

export interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-muted/70 rounded-lg p-4 hover:bg-muted/80 transition-colors">
      <div className="flex items-center gap-4">
        {task.image ? (
          <Image
            src={task.image.url}
            alt="Task image"
            width={task.image.width}
            height={task.image.height}
            className="rounded-md"
            style={{ aspectRatio: '64/64', objectFit: 'cover' }}
          />
        ) : (
          <PlaceholderImage className="rounded-md" width={64} height={64} />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-muted-foreground/80">{task.description}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href="#preview-task">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                <span>Preview</span>
              </DropdownMenuItem>
            </Link>
            <Link href="#edit-task">
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
      </div>
    </div>
  )
}
