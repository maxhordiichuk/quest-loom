import { UpdateQuestSchemaType } from '@/schema'

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

export type UpdateQuestRequestBody = UpdateQuestSchemaType

export type UpdateQuestResponseBody = SuccessResponseBody | ErrorResponseBody
