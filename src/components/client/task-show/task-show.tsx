import type { Task } from '@/db/types'

import { Button } from '@/components/ui/button'
import { TaskImage } from '@/components/client/task-image'

import { completeQuestLabel, taskNumberLabel } from './lib/labels'

export interface TaskShowProps {
  task: Task
}

export function TaskShow({ task }: TaskShowProps) {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="pb-7">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-1">
            {taskNumberLabel}
            {task.order + 1}
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/tight">
              {task.title}
            </h1>

            {task.image && (
              <TaskImage
                className="mx-auto lg:hidden"
                src={task.image.url}
                alt="Task image"
                width={task.image.width}
                height={task.image.height}
              />
            )}

            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {task.description}
            </p>

            <Button className="px-8">{completeQuestLabel}</Button>
          </div>
        </div>

        {task.image && (
          <TaskImage
            className="mx-auto hidden lg:block"
            src={task.image.url}
            alt="Task image"
            width={task.image.width}
            height={task.image.height}
          />
        )}
      </div>
    </main>
  )
}
