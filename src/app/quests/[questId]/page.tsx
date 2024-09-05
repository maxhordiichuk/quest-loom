import { getAuthenticatedSession } from '@/lib/auth'

import { QuestShow } from '@/components/server/quest-show'

interface QuestShowPageProps {
  params: {
    questId: string
  }
}

export default async function QuestShowPage({ params }: QuestShowPageProps) {
  const { user } = await getAuthenticatedSession()

  return <QuestShow id={params.questId} userId={user.id} />
}
