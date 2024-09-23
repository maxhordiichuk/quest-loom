import { z } from 'zod'

export const completeTaskSchema = z.object({
  assignmentId: z.string().trim().min(1, {
    message: 'Assignment ID is required',
  }),
  code: z.string().trim().min(1, {
    message: 'Code is required',
  }),
})

export type CompleteTaskSchemaType = z.infer<typeof completeTaskSchema>
