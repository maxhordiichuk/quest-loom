import { fetchQuest } from '@/server/queries'
import { notFound } from 'next/navigation'
import { serializeQuest } from '@/server/serializers/creator'

import { QuestEdit as QuestEditClient } from '@/components/quest-edit'

export interface QuestEditProps {
  id: string
  userId: string
}

export async function QuestEdit({ id, userId }: QuestEditProps) {
  const quest = await fetchQuest({ id, userId })

  if (!quest) {
    return notFound()
  }

  const serializedQuest = await serializeQuest(quest)

  return <QuestEditClient quest={serializedQuest} />
}
