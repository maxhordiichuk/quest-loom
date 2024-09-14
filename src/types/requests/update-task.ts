import { UpdateTaskSchemaType } from '@/schema'

export type UpdateTaskRequestBody = UpdateTaskSchemaType

export type UpdateTaskResponseBody = {
  errors?: {
    title?: string[]
    description?: string[]
    imageKey?: string[]
    root?: string[]
  }
}
