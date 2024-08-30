import { notFound } from 'next/navigation'

import { fetchUser } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import { serializeUser } from '@/serializers'

import { Navbar as NavbarClient } from '@/components/client/navbar'

export async function Navbar() {
  const { user } = await getAuthenticatedSession()
  const fullUser = await fetchUser({ userId: user.id })

  if (!fullUser) {
    // TODO: Replace with sign out and redirect to sign in (or not needed?)
    return notFound()
  }

  const serializedUser = await serializeUser(fullUser)

  return <NavbarClient user={serializedUser} />
}
