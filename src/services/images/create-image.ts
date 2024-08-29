import path from 'node:path'

import { db } from '@/db'
import { getObject } from '@/lib/aws'

export interface CreateImageProps {
  key: string
  userId: string
}

export async function createImage({ key, userId }: CreateImageProps) {
  const { ContentType, ContentLength, Metadata } = await getObject(key)

  if (!ContentType || !ContentLength || !Metadata) {
    throw new Error('Failed to get image metadata')
  }

  if (Metadata.userid !== userId) {
    throw new Error('User ID in metadata does not match the user ID in the request')
  }

  const { width, height } = Metadata

  if (!width || !height) {
    throw new Error('Image metadata does not contain width and height')
  }

  const filename = path.basename(key)

  return db.attachment.create({
    data: {
      key,
      filename,
      contentType: ContentType,
      metadata: {
        width: parseInt(width, 10),
        height: parseInt(height, 10),
      },
      byteSize: ContentLength,
    },
  })
}
