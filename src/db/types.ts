export interface Image {
  key?: string
  url: string
  width: number
  height: number
}

export interface User {
  name: string
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
