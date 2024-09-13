import { CreateTaskSchemaType } from '@/schema'

interface SuccessResponseBody {
  success: true
}

interface ErrorResponseBody {
  success: false
  errors: {
    questId?: string[]
    title?: string[]
    description?: string[]
    code?: string[]
    imageKey?: string[]
    root?: string[]
  }
}

export type CreateTaskRequestBody = CreateTaskSchemaType

export type CreateTaskResponseBody = SuccessResponseBody | ErrorResponseBody

export type CreateTaskAction = (body: CreateTaskRequestBody) => Promise<CreateTaskResponseBody>
