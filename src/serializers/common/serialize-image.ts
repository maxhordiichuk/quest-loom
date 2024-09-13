import { Image } from '@/types/models/common'

type ImageProp = {
  url: string
  metadata: {
    width: number
    height: number
  }
}

export function serializeImage(image: ImageProp | null): Image | null {
  if (!image) {
    return null
  }

  return {
    url: image.url,
    width: image.metadata.width,
    height: image.metadata.height,
  }
}
