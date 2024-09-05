import Image from 'next/image'
import { ArrowDownUp, Plus } from 'lucide-react'

import fallbackQuestImage from '@/assets/fallback-quest-image.jpg'
import { Button } from '@/components/ui/button'
import { PageContent } from '@/components/client/page-content'
import { PageHeading } from '@/components/client/page-heading'
import { TaskFormDialog } from '@/components/client/task-form-dialog'
import type { Quest, Task } from '@/db/types'
import type { createTask, deleteQuest, deleteTask, updateTask } from '@/actions'

import { QuestActions } from './quest-actions'
import { TaskCard } from './task-card'

export interface QuestShowProps {
  quest: Quest
  tasks: Task[]
  deleteQuestAction: typeof deleteQuest
  createTaskAction: typeof createTask
  deleteTaskAction: typeof deleteTask
  updateTaskAction: typeof updateTask
}

export function QuestShow({
  quest,
  tasks,
  deleteQuestAction,
  createTaskAction,
  deleteTaskAction,
  updateTaskAction,
}: QuestShowProps) {
  return (
    <PageContent className="pt-8">
      <div className="bg-muted rounded-lg overflow-hidden">
        <Image
          src={quest.image?.url || fallbackQuestImage}
          alt="Quest cover image"
          width={1216}
          height={400}
          className="w-full h-[300px] sm:h-[400px] object-cover"
          style={{ aspectRatio: '1200/400', objectFit: 'cover' }}
        />
      </div>

      <PageHeading title={quest.title} subtitle={quest.description} className="pt-8">
        <QuestActions quest={quest} deleteQuestAction={deleteQuestAction} />
      </PageHeading>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <div className="flex justify-end gap-3">
          <TaskFormDialog
            title="Create a new task"
            questId={quest.id}
            formAction={createTaskAction}
          >
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create task
            </Button>
          </TaskFormDialog>

          <Button variant="secondary">
            <ArrowDownUp className="w-4 h-4 mr-2" />
            Rearrange tasks
          </Button>
        </div>
      </div>

      <div className="grid gap-4">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            deleteTaskAction={deleteTaskAction}
            updateTaskAction={updateTaskAction}
          />
        ))}
      </div>
    </PageContent>
  )
}
