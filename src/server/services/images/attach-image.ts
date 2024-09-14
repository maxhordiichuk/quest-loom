import path from 'node:path'

import { copyObject } from '@/server/lib/aws'
import { deleteFlag } from '@/lib/constants'
import type { BaseUploader } from '@/server/uploaders'
import type { Identifiable } from '@/types/common'

import { createImage } from './create-image'
import { deleteImage } from './delete-image'

export async function attachImage<T extends Identifiable>(
  uploader: BaseUploader<T>,
  tempKey?: string | null
) {
  if (!tempKey) {
    return uploader.entity
  }

  if (tempKey === deleteFlag) {
    if (!uploader.currentKey) {
      return uploader.entity
    }

    await deleteImage(uploader.currentKey)

    return uploader.updateEntity(null)
  }

  const filename = path.basename(tempKey)
  const imageKey = uploader.getKey(filename)
  await copyObject(tempKey, imageKey)
  await createImage(imageKey)

  if (uploader.currentKey) {
    await deleteImage(uploader.currentKey)
  }

  return uploader.updateEntity(imageKey)
}
