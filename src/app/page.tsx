import { redirect } from 'next/navigation'

import paths from '@/lib/paths'
import { getAuthenticatedSession } from '@/server/auth'

export default async function Home() {
  await getAuthenticatedSession()

  redirect(paths.questList)
}
