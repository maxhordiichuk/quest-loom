export interface Quest {
  id: string
  title: string
  description: string | null
  points: number
  isCompleted: boolean
  cover: {
    key: string
    url: string
    width: number
    height: number
  } | null
}

export interface User {
  name: string
  email: string
  avatar: {
    key: string
    url: string
    width: number
    height: number
  } | null
}
