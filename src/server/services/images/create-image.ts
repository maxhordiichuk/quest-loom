import { db } from '@/server/db'
import { getObject } from '@/server/lib/aws'

export async function createImage(key: string) {
  const { ContentType, ContentLength, Metadata } = await getObject(key)

  if (!ContentType || !ContentLength || !Metadata) {
    throw new Error('Failed to get image metadata')
  }

  const { width, height } = Metadata

  if (!width || !height) {
    throw new Error('Image metadata does not contain width and height')
  }

  return db.attachment.create({
    data: {
      key,
      contentType: ContentType,
      metadata: {
        width: parseInt(width, 10),
        height: parseInt(height, 10),
      },
      byteSize: ContentLength,
    },
  })
}
