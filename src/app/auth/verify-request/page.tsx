import { redirect } from 'next/navigation'

import paths from '@/lib/paths'
import { getSession } from '@/server/auth'

import { VerifyRequest } from '@/components/verify-request'

export default async function VerifyRequestPage() {
  const session = await getSession()

  if (session?.user) {
    return redirect(paths.home)
  }

  return <VerifyRequest />
}
