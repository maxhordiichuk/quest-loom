import { ReorderTaskSchemaType } from '@/schema'

interface SuccessResponseBody {
  success: true
}

interface ErrorResponseBody {
  success: false
  errors: string[]
}

export type ReorderTaskRequestBody = ReorderTaskSchemaType

export type ReorderTaskResponseBody = SuccessResponseBody | ErrorResponseBody

export type ReorderTaskAction = (body: ReorderTaskRequestBody) => Promise<ReorderTaskResponseBody>
