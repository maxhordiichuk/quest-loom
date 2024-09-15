'use client'

import fallbackTaskImage from '@/assets/fallback-task-image.jpg'
import type { CompleteTaskAction } from '@/types/requests'
import type { Task } from '@/types/models/player'

import { Button } from '@/components/ui/button'
import { CompleteTaskDialog } from '@/components/complete-task-dialog'
import { PageContent } from '@/components/page-content'
import { TaskImage } from '@/components/task-image'

import { completeTaskLabel, taskNumberLabel } from './lib'

export interface TaskShowProps {
  task: Task
  assignmentId?: string
  completeTask?: CompleteTaskAction
}

export function TaskShow({ task, assignmentId, completeTask }: TaskShowProps) {
  const taskImageUrl = task.image?.url || fallbackTaskImage.src

  return (
    <PageContent>
      <div className="grid items-center justify-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="pb-7">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-1">
            {taskNumberLabel}
            {task.order + 1}
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/tight">
              {task.title}
            </h1>

            <TaskImage
              className="mx-auto lg:hidden"
              src={taskImageUrl}
              alt="Task image"
              width={500}
              height={500}
            />

            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {task.description}
            </p>

            {completeTask && assignmentId ? (
              <CompleteTaskDialog assignmentId={assignmentId} completeTask={completeTask}>
                <Button className="px-8">{completeTaskLabel}</Button>
              </CompleteTaskDialog>
            ) : (
              <Button className="px-8" disabled>
                {completeTaskLabel}
              </Button>
            )}
          </div>
        </div>

        <TaskImage
          className="ml-auto hidden lg:block"
          src={taskImageUrl}
          alt="Task image"
          width={500}
          height={500}
        />
      </div>
    </PageContent>
  )
}
