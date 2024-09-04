import { User } from '@/db/types'

type UserProp = {
  name: string
  email: string
}

export async function serializeUser(user: UserProp): Promise<User> {
  return {
    name: user.name,
    email: user.email,
  }
}
