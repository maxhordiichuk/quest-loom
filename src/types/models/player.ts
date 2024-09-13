import type { Image } from './common'

export interface Quest {
  title: string
  description: string | null
  image?: Image | null
}

export interface Task {
  title: string
  description: string | null
  order: number
  image?: Image | null
}
