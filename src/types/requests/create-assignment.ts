import { Assignment } from '@/types/models/creator'

interface SuccessResponseBody extends Assignment {
  errors?: undefined
}

interface ErrorResponseBody {
  errors: [string]
}

export type CreateAssignmentResponseBody = SuccessResponseBody | ErrorResponseBody
