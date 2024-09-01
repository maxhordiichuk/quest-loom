import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { TaskFormDialog } from '@/components/client/task-form-dialog'
import type { Quest, Task } from '@/db/types'
import type { createTask } from '@/actions'

import { TaskCard } from './task-card'

export interface QuestShowProps {
  quest: Quest
  tasks: Task[]
  createTaskAction: typeof createTask
}

export function QuestShow({ quest, tasks, createTaskAction }: QuestShowProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-8">
        <div>
          {quest.cover && (
            <div className="bg-muted rounded-lg overflow-hidden">
              <Image
                src={quest.cover.url}
                alt="Quest cover image"
                width={quest.cover.width}
                height={quest.cover.height}
                className="w-full h-[300px] sm:h-[400px] object-cover"
                style={{ aspectRatio: '1200/400', objectFit: 'cover' }}
              />
            </div>
          )}
          <div className="mt-6 space-y-2">
            <h1 className="text-3xl font-bold">{quest.title}</h1>
            <p className="text-muted-foreground">{quest.description}</p>
          </div>
        </div>
        <hr className="border-t border-muted" />
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <div className="flex justify-end gap-4">
            <TaskFormDialog title="Create a new task" formAction={createTaskAction}>
              <Button>Create task</Button>
            </TaskFormDialog>
            <Button variant="secondary">Rearrange tasks</Button>
          </div>
        </div>
        <div className="grid gap-4">
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}
