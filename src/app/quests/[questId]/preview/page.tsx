import { getAuthenticatedSession } from '@/server/auth'

import { QuestPreview } from '@/server/components/quest-preview'

interface QuestPreviewPageProps {
  params: {
    questId: string
  }
}

export default async function QuestPreviewPage({ params }: QuestPreviewPageProps) {
  const { user } = await getAuthenticatedSession()

  return <QuestPreview id={params.questId} userId={user.id} />
}
