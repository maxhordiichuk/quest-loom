import { notFound } from 'next/navigation'

import { fetchQuest } from '@/server/queries'
import { serializeQuest } from '@/server/serializers/creator'

import { AssignmentIntroduction } from '@/components/assignment-introduction'

export interface QuestPreviewProps {
  id: string
  userId: string
}

export async function QuestPreview({ id, userId }: QuestPreviewProps) {
  const quest = await fetchQuest({ id, userId })

  if (!quest) {
    return notFound()
  }

  const serializedQuest = await serializeQuest(quest)

  return <AssignmentIntroduction quest={serializedQuest} />
}
