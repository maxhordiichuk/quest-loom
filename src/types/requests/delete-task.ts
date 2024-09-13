import { DeleteTaskSchemaType } from '@/schema'

interface SuccessResponseBody {
  success: true
}

interface ErrorResponseBody {
  success: false
  errors: string[]
}

export type DeleteTaskRequestBody = DeleteTaskSchemaType

export type DeleteTaskResponseBody = SuccessResponseBody | ErrorResponseBody

export type DeleteTaskAction = (body: DeleteTaskRequestBody) => Promise<DeleteTaskResponseBody>
