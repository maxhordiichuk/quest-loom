import { getAuthenticatedSession } from '@/server/auth'

import { QuestEdit } from '@/server/components/quest-edit'

interface QuestEditPageProps {
  params: {
    questId: string
  }
}

export default async function QuestShowPage({ params }: QuestEditPageProps) {
  const { user } = await getAuthenticatedSession()

  return <QuestEdit id={params.questId} userId={user.id} />
}
