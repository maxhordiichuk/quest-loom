import { getAuthenticatedSession } from '@/server/auth'

import { QuestShow } from '@/server/components/quest-show'

interface QuestShowPageProps {
  params: {
    questId: string
  }
}

export default async function QuestShowPage({ params }: QuestShowPageProps) {
  const { user } = await getAuthenticatedSession()

  return <QuestShow id={params.questId} userId={user.id} />
}
