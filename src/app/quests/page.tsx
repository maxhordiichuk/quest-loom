import { getAuthenticatedSession } from '@/server/auth'

import { QuestList } from '@/server/components/quest-list'

export default async function QuestListPage() {
  const { user } = await getAuthenticatedSession()

  return <QuestList userId={user.id} />
}
