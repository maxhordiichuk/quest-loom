import { z } from 'zod'

const questSchema = z.object({
  title: z.string().trim().min(1, {
    message: 'Title is required',
  }),
  description: z.string().trim().min(1, {
    message: 'Description is required',
  }),
  imageKey: z.string().optional().nullable(),
})

export const createQuestSchema = questSchema

export type CreateQuestSchemaType = z.infer<typeof createQuestSchema>

export const updateQuestSchema = questSchema

export type UpdateQuestSchemaType = z.infer<typeof updateQuestSchema>
