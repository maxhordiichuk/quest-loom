import { CreateQuestSchemaType } from '@/schema'

interface SuccessResponseBody {
  questId: string
  errors?: undefined
}

interface ErrorResponseBody {
  errors: {
    title?: string[]
    description?: string[]
    imageKey?: string[]
    root?: string[]
  }
}

export type CreateQuestRequestBody = CreateQuestSchemaType

export type CreateQuestResponseBody = SuccessResponseBody | ErrorResponseBody
