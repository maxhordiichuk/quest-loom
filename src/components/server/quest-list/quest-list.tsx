import { fetchQuests } from '@/db/queries'

import { QuestList as ClientQuestList } from '@/components/client/quest-list'
import { serializeQuest } from '@/serializers/creator'

export interface QuestListProps {
  userId: string
}

export async function QuestList({ userId }: QuestListProps) {
  const quests = await fetchQuests({ userId })
  const serializedQuests = await Promise.all(quests.map(serializeQuest))

  return <ClientQuestList quests={serializedQuests} />
}
