import { notFound } from 'next/navigation'

import { fetchQuest, fetchTasks } from '@/server/queries'
import { serializeQuest, serializeTask } from '@/server/serializers/creator'

import { QuestShow as ClientQuestShow } from '@/components/quest-show'

export interface QuestShowProps {
  id: string
  userId: string
}

export async function QuestShow({ id, userId }: QuestShowProps) {
  const quest = await fetchQuest({ id, userId })

  if (!quest) {
    return notFound()
  }

  const tasks = await fetchTasks({ questId: id })

  const serializedQuest = await serializeQuest(quest)
  const serializedTasks = await Promise.all(tasks.map(serializeTask))

  return <ClientQuestShow quest={serializedQuest} tasks={serializedTasks} />
}
