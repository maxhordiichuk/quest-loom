import type { User } from '@/types/models/creator'

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
