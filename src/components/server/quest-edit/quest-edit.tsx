import { fetchQuest } from '@/db/queries'
import { notFound } from 'next/navigation'
import { serializeQuest } from '@/serializers'

import { QuestEdit as QuestEditClient } from '@/components/client/quest-edit'

export interface QuestEditProps {
  questId: string
  userId: string
}

export async function QuestEdit({ userId, questId }: QuestEditProps) {
  const quest = await fetchQuest({ userId, questId })

  if (!quest) {
    return notFound()
  }

  const serializedQuest = await serializeQuest(quest)

  return <QuestEditClient quest={serializedQuest} />
}
