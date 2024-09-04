import { db } from '@/db'
import { getFileUrl } from '@/lib/aws'

export async function fetchImage(key: string | null) {
  if (!key) {
    return null
  }

  const image = await db.attachment.findFirst({ where: { key } })

  if (!image) {
    return null
  }

  const url = getFileUrl(image.key)

  return { ...image, url }
}
