import { fetchUser } from '@/db/queries'
import { getSession } from '@/lib/auth'
import { serializeUser } from '@/serializers'

import { Navbar as NavbarClient } from '@/components/client/navbar'

export async function Navbar() {
  const session = await getSession()

  if (!session?.user) {
    return null
  }

  const fullUser = await fetchUser({ userId: session.user.id })

  if (!fullUser) {
    return null
  }

  const serializedUser = await serializeUser(fullUser)

  return <NavbarClient user={serializedUser} />
}
