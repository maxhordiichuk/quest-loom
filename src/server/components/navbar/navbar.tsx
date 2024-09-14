import { fetchUser } from '@/server/queries'
import { getAuthenticatedSession } from '@/server/auth'
import { serializeUser } from '@/server/serializers/creator'

import { Navbar as NavbarClient } from '@/components/navbar'

export async function Navbar() {
  const session = await getAuthenticatedSession()
  const fullUser = await fetchUser({ userId: session.user.id })

  if (!fullUser) {
    return null
  }

  const serializedUser = await serializeUser(fullUser)

  return <NavbarClient user={serializedUser} />
}
