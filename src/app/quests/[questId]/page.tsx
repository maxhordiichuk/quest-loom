import { QuestEdit } from '@/components/server/quest-edit'
import { getAuthenticatedSession } from '@/lib/auth'

interface QuestShowPageProps {
  params: {
    questId: string
  }
}

export default async function QuestShowPage({ params }: QuestShowPageProps) {
  const { user } = await getAuthenticatedSession()

  return <QuestEdit questId={params.questId} userId={user.id} />
}
