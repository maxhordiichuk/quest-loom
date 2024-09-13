import { fetchUser } from '@/db/queries'
import { getAuthenticatedSession } from '@/lib/auth'
import { serializeUser } from '@/serializers/creator'

import { Navbar as NavbarClient } from '@/components/client/navbar'

export async function Navbar() {
  const session = await getAuthenticatedSession()
  const fullUser = await fetchUser({ userId: session.user.id })

  if (!fullUser) {
    return null
  }

  const serializedUser = await serializeUser(fullUser)

  return <NavbarClient user={serializedUser} />
}
