import { MoveTaskSchemaType } from '@/schema'

interface SuccessResponseBody {
  success: true
}

interface ErrorResponseBody {
  success: false
  errors: string[]
}

export type MoveTaskRequestBody = MoveTaskSchemaType

export type MoveTaskResponseBody = SuccessResponseBody | ErrorResponseBody

export type MoveTaskAction = (body: MoveTaskRequestBody) => Promise<MoveTaskResponseBody>
