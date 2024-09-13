import { StartAssignmentSchemaType } from '@/schema'

export type StartAssignmentRequestBody = StartAssignmentSchemaType

export type StartAssignmentResponseBody = {
  errors?: string[]
  success?: boolean
}

export type StartAssignmentAction = (
  body: StartAssignmentRequestBody
) => Promise<StartAssignmentResponseBody>
