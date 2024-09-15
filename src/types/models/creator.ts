import type { Image } from './common'

export interface Assignment {
  id: string
  completedAt: Date | null
  url: string
}

export interface User {
  email: string
}

export interface Quest {
  id: string
  title: string
  description: string | null
  image?: Image | null
}

export interface Task {
  id: string
  title: string
  description: string | null
  code: string
  order: number
  image?: Image | null
}
