import paths from '@/lib/paths'
import { getAuthenticatedSession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  await getAuthenticatedSession()

  redirect(paths.questList)
}
