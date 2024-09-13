import { DeleteQuestSchemaType } from '@/schema'

interface SuccessResponseBody {
  success: true
}

interface ErrorResponseBody {
  success: false
  errors: string[]
}

export type DeleteQuestRequestBody = DeleteQuestSchemaType

export type DeleteQuestResponseBody = SuccessResponseBody | ErrorResponseBody

export type DeleteQuestAction = (body: DeleteQuestRequestBody) => Promise<DeleteQuestResponseBody>
