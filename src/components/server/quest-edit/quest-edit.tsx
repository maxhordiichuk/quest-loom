import { fetchQuest } from '@/db/queries'
import { notFound } from 'next/navigation'
import { serializeQuest } from '@/serializers'

import { QuestEdit as QuestEditClient } from '@/components/client/quest-edit'

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
