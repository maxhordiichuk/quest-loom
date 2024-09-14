import { CreateTaskSchemaType } from '@/schema'

export type CreateTaskRequestBody = CreateTaskSchemaType

export type CreateTaskResponseBody = {
  errors?: {
    title?: string[]
    description?: string[]
    code?: string[]
    imageKey?: string[]
    root?: string[]
  }
}
