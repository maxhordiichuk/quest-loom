import { CompleteTaskSchemaType } from '@/schema'

export type CompleteTaskRequestBody = CompleteTaskSchemaType

export type CompleteTaskResponseBody = {
  errors?: {
    code?: string[]
    root?: string[]
  }
}

export type CompleteTaskAction = (
  body: CompleteTaskRequestBody
) => Promise<CompleteTaskResponseBody>
