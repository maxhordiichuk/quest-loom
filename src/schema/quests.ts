import { z } from 'zod'

export const createQuestSchema = z.object({
  title: z.string().trim().min(1, {
    message: 'Title is required',
  }),
  description: z.string().trim().min(1, {
    message: 'Description is required',
  }),
  imageKey: z.string().optional().nullable(),
})

export type CreateQuestSchemaType = z.infer<typeof createQuestSchema>

export const updateQuestSchema = z.object({
  id: z.string().uuid({
    message: 'Quest ID is required',
  }),
  title: z.string().trim().min(1, {
    message: 'Title is required',
  }),
  description: z.string().trim().min(1, {
    message: 'Description is required',
  }),
  imageKey: z.string().optional().nullable(),
})

export type UpdateQuestSchemaType = z.infer<typeof updateQuestSchema>
