import { QuestList } from '@/components/server/quest-list'
import { getAuthenticatedSession } from '@/lib/auth'

export default async function QuestListPage() {
  const { user } = await getAuthenticatedSession()

  return <QuestList userId={user.id} />
}
