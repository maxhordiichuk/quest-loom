'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'

import fallbackQuestImage from '@/assets/fallback-quest-image.jpg'
import { createTask } from '@/lib/client'
import type { CreateTaskRequestBody } from '@/types/requests'
import type { Quest, Task } from '@/types/models/creator'

import { Button } from '@/components/ui/button'
import { PageContent } from '@/components/page-content'
import { PageHeading } from '@/components/page-heading'
import { TaskFormDialog } from '@/components/task-form-dialog'

import { QuestActions } from './quest-actions'
import { TaskList } from './task-list'

export interface QuestShowProps {
  quest: Quest
  tasks: Task[]
}

export function QuestShow({ quest, tasks }: QuestShowProps) {
  const handleCreateTask = (body: CreateTaskRequestBody) => createTask(quest.id, body)

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
        <QuestActions quest={quest} />
      </PageHeading>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Tasks</h2>
        <div className="flex justify-end gap-3">
          <TaskFormDialog title="Create a new task" onSubmit={handleCreateTask}>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Task
            </Button>
          </TaskFormDialog>
        </div>
      </div>

      <TaskList tasks={tasks} />
    </PageContent>
  )
}
