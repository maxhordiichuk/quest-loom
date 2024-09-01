export interface ImageType {
  key: string
  url: string
  width: number
  height: number
}

export interface User {
  name: string
  email: string
  avatar: ImageType | null
}

export interface Quest {
  id: string
  title: string
  description: string | null
  cover: ImageType | null
}

export interface Task {
  id: string
  title: string
  description: string | null
  code: string
  order: number
  image: ImageType | null
}
