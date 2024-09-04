'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import paths from '@/lib/paths'
import { updateTask } from '@/actions'
import type { Task } from '@/db/types'

import { Button } from '@/components/ui/button'
import { Edit, Eye, Trash2 } from 'lucide-react'
import { PlaceholderImage } from '@/components/client/placeholder-image'
import { TaskFormDialog } from '@/components/client/task-form-dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

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
            className="rounded-md w-16 h-16 object-cover"
            width={64}
            height={64}
          />
        ) : (
          <PlaceholderImage className="rounded-md" width={64} height={64} />
        )}

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-sm text-muted-foreground/80">{task.description}</p>
        </div>

        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost">
                  <Link href={paths.taskShow(task.id)}>
                    <Eye className="h-4 w-4" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Preview task</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TaskFormDialog title="Update the task" task={task} formAction={updateTask}>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
              </TaskFormDialog>
              <TooltipContent>
                <p>Edit task</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost">
                  <Link href={paths.taskShow(task.id)}>
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete task</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}
