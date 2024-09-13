import Image from 'next/image'
import { Plus } from 'lucide-react'

import fallbackQuestImage from '@/assets/fallback-quest-image.jpg'
import { Button } from '@/components/ui/button'
import { PageContent } from '@/components/client/page-content'
import { PageHeading } from '@/components/client/page-heading'
import { TaskFormDialog } from '@/components/client/task-form-dialog'
import type {
  CreateTaskAction,
  DeleteQuestAction,
  DeleteTaskAction,
  ReorderTaskAction,
  UpdateTaskAction,
} from '@/types/requests'
import type { Quest, Task } from '@/types/models/creator'

import { QuestActions } from './quest-actions'
import { TaskList } from './task-list'

export interface QuestShowProps {
  quest: Quest
  tasks: Task[]
  deleteQuest: DeleteQuestAction
  createTask: CreateTaskAction
  deleteTask: DeleteTaskAction
  updateTask: UpdateTaskAction
  reorderTask: ReorderTaskAction
}

export function QuestShow({
  quest,
  tasks,
  deleteQuest,
  createTask,
  deleteTask,
  updateTask,
  reorderTask,
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
        <QuestActions quest={quest} deleteQuest={deleteQuest} />
      </PageHeading>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <div className="flex justify-end gap-3">
          <TaskFormDialog title="Create a new task" questId={quest.id} onSubmit={createTask}>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Task
            </Button>
          </TaskFormDialog>
        </div>
      </div>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        reorderTask={reorderTask}
      />
    </PageContent>
  )
}
