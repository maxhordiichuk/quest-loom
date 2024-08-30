import { QuestNew } from '@/components/client/quest-new'
import { getAuthenticatedSession } from '@/lib/auth'

export default async function QuestNewPage() {
  await getAuthenticatedSession()

  return <QuestNew />
}
