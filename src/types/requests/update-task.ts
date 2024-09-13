import { UpdateTaskSchemaType } from '@/schema'

interface SuccessResponseBody {
  success: true
  questId: string
}

interface ErrorResponseBody {
  success: false
  errors: {
    title?: string[]
    description?: string[]
    imageKey?: string[]
    root?: string[]
  }
}

export type UpdateTaskRequestBody = UpdateTaskSchemaType

export type UpdateTaskResponseBody = SuccessResponseBody | ErrorResponseBody

export type UpdateTaskAction = (body: UpdateTaskRequestBody) => Promise<UpdateTaskResponseBody>
