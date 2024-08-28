import { useCallback, useState } from 'react'

import paths from '@/lib/paths'
import { UploadResponseBodySuccess } from '@/app/api/upload/types'

class UploadError extends Error {
  static message = 'Failed to upload image'

  constructor() {
    super(UploadError.message)
    this.name = 'UploadError'
  }
}

const getUploadConfig = async (file: File) => {
  const body = JSON.stringify({ filename: file.name, contentType: file.type })
  const response = await fetch(paths.apiUpload(), { method: 'POST', body })

  if (!response.ok) {
    throw new UploadError()
  }

  return response.json()
}

const uploadImageToS3 = async (file: File) => {
  const { url, fileUrl, fields }: UploadResponseBodySuccess = await getUploadConfig(file)

  const formData = new FormData()
  Object.entries(fields).forEach(([key, value]) => {
    formData.append(key, value)
  })
  formData.append('file', file)

  const response = await fetch(url, { method: 'POST', body: formData })

  if (!response.ok) {
    throw new UploadError()
  }

  return fileUrl
}

export function useImageUpload(initialImageURL: string) {
  const [imageUrl, setImageURL] = useState(initialImageURL)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const uploadImage = useCallback(async (file: File) => {
    try {
      const newImageUrl = await uploadImageToS3(file)

      setImageURL(newImageUrl)
    } catch (error) {
      setUploadError(UploadError.message)
    }
  }, [])

  return { imageUrl, uploadImage, uploadError }
}
