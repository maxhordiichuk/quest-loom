import { QuestEdit } from '@/components/quest-edit'
import { fetchQuest } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'

interface QuestShowPageProps {
  params: {
    questId: string
  }
}

export default async function QuestShowPage({ params }: QuestShowPageProps) {
  const { user } = await getAuthenticatedSession()
  const quest = await fetchQuest(params.questId, user.id)

  return <QuestEdit quest={quest} />
}
