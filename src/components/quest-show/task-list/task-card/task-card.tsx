'use client'

import Image from 'next/image'
import Link from 'next/link'

import fallbackTaskImage from '@/assets/task-image.jpg'
import paths from '@/lib/paths'
import { updateTask } from '@/lib/client'
import type { Task } from '@/types/models/creator'
import type { UpdateTaskRequestBody } from '@/types/requests'

import { Button } from '@/components/ui/button'
import { DeleteTaskDialog } from '@/components/delete-task-dialog'
import { Edit, Trash2 } from 'lucide-react'
import { TaskFormDialog } from '@/components/task-form-dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export interface TaskCardProps {
  task: Task
  dragHandler: React.ReactNode
}

export function TaskCard({ task, dragHandler }: TaskCardProps) {
  const handleUpdateTask = async (body: UpdateTaskRequestBody) => updateTask(task.id, body)

  return (
    <div className="bg-muted/70 rounded-lg p-4 hover:bg-muted/80 transition-colors">
      <div className="flex items-center gap-4">
        {dragHandler}

        <Image
          src={fallbackTaskImage.src}
          alt="Task image"
          className="rounded-md w-16 h-16 object-cover"
          width={64}
          height={64}
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            <Link href={paths.taskShow(task.id)} className="hover:underline">
              {task.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground/80">{task.description}</p>
        </div>

        <div>
          <TooltipProvider>
            <Tooltip>
              <TaskFormDialog title="Update the task" task={task} onSubmit={handleUpdateTask}>
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
              <DeleteTaskDialog task={task}>
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
