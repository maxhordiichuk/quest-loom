import { db } from '@/db'

interface FetchUserProps {
  userId: string
}

export function fetchUser({ userId }: FetchUserProps) {
  return db.user.findFirst({
    where: { id: userId },
    include: {
      avatar: {
        select: { key: true, metadata: true },
      },
    },
  })
}
