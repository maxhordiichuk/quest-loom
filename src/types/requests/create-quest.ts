import { CreateQuestSchemaType } from '@/schema'

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

export type CreateQuestRequestBody = CreateQuestSchemaType

export type CreateQuestResponseBody = SuccessResponseBody | ErrorResponseBody

export type CreateQuestAction = (body: CreateQuestRequestBody) => Promise<CreateQuestResponseBody>
