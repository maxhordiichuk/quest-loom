import type { User } from '@/types/models/creator'

type UserProp = {
  email: string
}

export async function serializeUser(user: UserProp): Promise<User> {
  return {
    email: user.email,
  }
}
