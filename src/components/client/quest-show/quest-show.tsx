import Image from 'next/image'
import Link from 'next/link'

import paths from '@/lib/paths'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { TaskFormDialog } from '@/components/client/task-form-dialog'
import type { Quest, Task } from '@/db/types'
import type { createTask } from '@/actions'

import { QuestActions } from './quest-actions'
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
            <div className="flex justify-between items-start">
              <h1 className="text-4xl font-bold">{quest.title}</h1>
              <QuestActions questId={quest.id} />
            </div>

            <p className="text-muted-foreground">{quest.description}</p>
          </div>
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Tasks</h2>
          <div className="flex justify-end gap-3">
            <TaskFormDialog
              title="Create a new task"
              questId={quest.id}
              formAction={createTaskAction}
            >
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
