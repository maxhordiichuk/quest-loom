import { db } from '@/server/db'

interface FetchUserProps {
  userId: string
}

export function fetchUser({ userId }: FetchUserProps) {
  return db.user.findFirst({ where: { id: userId } })
}
