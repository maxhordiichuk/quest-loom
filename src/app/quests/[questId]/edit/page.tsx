import { QuestEdit } from '@/components/server/quest-edit'
import { getAuthenticatedSession } from '@/lib/auth'

interface QuestEditPageProps {
  params: {
    questId: string
  }
}

export default async function QuestShowPage({ params }: QuestEditPageProps) {
  const { user } = await getAuthenticatedSession()

  return <QuestEdit id={params.questId} userId={user.id} />
}
