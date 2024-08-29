import { useCallback, useState } from 'react'

import paths from '@/lib/paths'
import { UploadRequestBody, UploadResponseBody } from '@/app/api/upload/types'

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

const getUploadConfig = async (file: File) => {
  const dimensions = await getImageDimensions(file)
  const data: UploadRequestBody = { filename: file.name, contentType: file.type, dimensions }
  const response = await fetch(paths.apiUpload, { method: 'POST', body: JSON.stringify(data) })

  if (!response.ok) {
    throw new UploadError()
  }

  return response.json()
}

const uploadImageToS3 = async (file: File) => {
  const { url, fileUrl, fields }: UploadResponseBody = await getUploadConfig(file)

  const formData = new FormData()
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append('file', file)

  const response = await fetch(url, { method: 'POST', body: formData })

  if (!response.ok) {
    throw new UploadError()
  }

  return { fileUrl, fileKey: fields.key }
}

export function useImageUpload(initialImageURL: string | undefined) {
  const [imageUrl, setImageURL] = useState(initialImageURL)
  const [imageKey, setImageKey] = useState<string | null>(null)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const uploadImage = useCallback(async (file: File) => {
    try {
      const { fileUrl: newImageUrl, fileKey } = await uploadImageToS3(file)

      setImageURL(newImageUrl)
      setImageKey(fileKey)
    } catch (error) {
      if (error instanceof UploadError) {
        console.error(error.message)
      }

      setUploadError(UploadError.message)
    }
  }, [])

  return { imageUrl, imageKey, uploadImage, uploadError }
}
