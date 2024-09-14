import { redirect } from 'next/navigation'

import paths from '@/lib/paths'
import { getCsrfToken, getSession } from '@/server/auth'

import { LoginPage as LoginPageClient } from '@/components/login-page'

export default async function LoginPage() {
  const session = await getSession()

  if (session?.user) {
    return redirect(paths.home)
  }

  const csrfToken = getCsrfToken()

  return <LoginPageClient csrfToken={csrfToken} />
}
