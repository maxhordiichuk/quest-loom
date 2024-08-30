import { User } from '@/db/types'
import { getFileUrl } from '@/lib/aws'

export type UserProp = {
  name: string
  email: string
  avatar: {
    key: string
    metadata: {
      width: number
      height: number
    }
  } | null
}

export async function serializeUser(user: UserProp): Promise<User> {
  if (!user.avatar) {
    return user as User
  }

  const { avatar } = user
  const avatarUrl = await getFileUrl(avatar.key)

  return {
    name: user.name,
    email: user.email,
    avatar: {
      key: avatar.key,
      url: avatarUrl,
      width: avatar.metadata.width,
      height: avatar.metadata.height,
    },
  }
}
