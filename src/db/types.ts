export interface Quest {
  id: string
  title: string
  description: string | null
  points: number
  isCompleted: boolean
  cover: {
    key: string
    url: string
  } | null
}
