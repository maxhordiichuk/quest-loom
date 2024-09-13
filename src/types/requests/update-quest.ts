import { UpdateQuestSchemaType } from '@/schema'

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

export type UpdateQuestRequestBody = UpdateQuestSchemaType

export type UpdateQuestResponseBody = SuccessResponseBody | ErrorResponseBody

export type UpdateQuestAction = (body: UpdateQuestRequestBody) => Promise<UpdateQuestResponseBody>
