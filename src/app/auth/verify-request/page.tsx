import { redirect } from 'next/navigation'

import paths from '@/lib/paths'
import { getSession } from '@/lib/auth'

import { VerifyRequest } from '@/components/client/verify-request-page'

export default async function VerifyRequestPage() {
  const session = await getSession()

  if (session?.user) {
    return redirect(paths.home)
  }

  return <VerifyRequest />
}
