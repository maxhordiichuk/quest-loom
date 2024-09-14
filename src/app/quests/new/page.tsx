import { getAuthenticatedSession } from '@/server/auth'

import { QuestNew } from '@/components/quest-new'

export default async function QuestNewPage() {
  await getAuthenticatedSession()

  return <QuestNew />
}
