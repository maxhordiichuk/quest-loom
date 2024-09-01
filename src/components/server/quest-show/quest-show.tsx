import { notFound } from 'next/navigation'

import { createTask } from '@/actions'
import { fetchQuest, fetchTasks } from '@/db/queries'
import { serializeQuest, serializeTask } from '@/serializers'

import { QuestShow as ClientQuestShow } from '@/components/client/quest-show'

export interface QuestShowProps {
  questId: string
  userId: string
}

export async function QuestShow({ questId, userId }: QuestShowProps) {
  const quest = await fetchQuest({ questId, userId })

  if (!quest) {
    return notFound()
  }

  const tasks = await fetchTasks({ questId })

  const serializedQuest = await serializeQuest(quest)
  const serializedTasks = await Promise.all(tasks.map(serializeTask))

  return (
    <ClientQuestShow
      quest={serializedQuest}
      tasks={serializedTasks}
      createTaskAction={createTask}
    />
  )
}
