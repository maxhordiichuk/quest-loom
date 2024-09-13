import { useCallback, useState } from 'react'

import type { ImageType } from '@/types/models/creator'
import type { UploadRequestBody, UploadResponseBody } from '@/app/api/upload/types'

import paths from '@/lib/paths'

interface Dimensions {
  width: number
  height: number
}

class UploadError extends Error {
  static message = 'Failed to upload image'

  constructor() {
    super(UploadError.message)
    this.name = 'UploadError'
  }
}

const getImageDimensions = (file: File) =>
  new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image()

    img.onload = () => {
      resolve({ width: img.width, height: img.height })
    }

    img.onerror = reject

    img.src = URL.createObjectURL(file)
  })

const getUploadConfig = async (file: File, dimensions: Dimensions) => {
  const data: UploadRequestBody = { filename: file.name, contentType: file.type, dimensions }
  const response = await fetch(paths.apiUpload, { method: 'POST', body: JSON.stringify(data) })

  if (!response.ok) {
    throw new UploadError()
  }

  return response.json()
}

const uploadImageToS3 = async (file: File) => {
  const dimensions = await getImageDimensions(file)
  const { url, fileUrl, fields }: UploadResponseBody = await getUploadConfig(file, dimensions)

  const formData = new FormData()
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append('file', file)

  const response = await fetch(url, { method: 'POST', body: formData })

  if (!response.ok) {
    throw new UploadError()
  }

  return { url: fileUrl, key: fields.key, ...dimensions }
}

export function useImageUpload(initialImage?: ImageType | null) {
  const [image, setImage] = useState(initialImage)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const uploadImage = useCallback(async (file: File) => {
    try {
      const newImage = await uploadImageToS3(file)

      setImage(newImage)
    } catch (error) {
      console.error(error)

      setUploadError(UploadError.message)
    }
  }, [])

  return { image, uploadImage, uploadError }
}
