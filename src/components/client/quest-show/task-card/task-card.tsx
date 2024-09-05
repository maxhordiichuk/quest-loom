'use client'

import Image from 'next/image'
import Link from 'next/link'

import fallbackTaskImage from '@/assets/fallback-task-image.jpg'
import paths from '@/lib/paths'
import type { Task } from '@/db/types'
import type { deleteTask, updateTask } from '@/actions'

import { Button } from '@/components/ui/button'
import { DeleteTaskDialog } from '@/components/client/delete-task-dialog'
import { Edit, Eye, Trash2 } from 'lucide-react'
import { TaskFormDialog } from '@/components/client/task-form-dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export interface TaskCardProps {
  task: Task
  deleteTaskAction: typeof deleteTask
  updateTaskAction: typeof updateTask
}

export function TaskCard({ task, deleteTaskAction, updateTaskAction }: TaskCardProps) {
  return (
    <div className="bg-muted/70 rounded-lg p-4 hover:bg-muted/80 transition-colors">
      <div className="flex items-center gap-4">
        <Image
          src={fallbackTaskImage.src}
          alt="Task image"
          className="rounded-md w-16 h-16 object-cover"
          width={64}
          height={64}
        />

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
              <TaskFormDialog title="Update the task" task={task} formAction={updateTaskAction}>
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
              <DeleteTaskDialog task={task} deleteAction={deleteTaskAction}>
                <TooltipTrigger asChild>
                  <Button variant="ghost">
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </TooltipTrigger>
              </DeleteTaskDialog>
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
