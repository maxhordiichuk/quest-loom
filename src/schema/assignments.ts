import { z } from 'zod'

export const startAssignmentSchema = z.object({
  id: z.string().trim().uuid({
    message: 'Assignment ID is required',
  }),
})

export type StartAssignmentSchemaType = z.infer<typeof startAssignmentSchema>

export const completeTaskSchema = z.object({
  assignmentId: z.string().trim().uuid({
    message: 'Assignment ID is required',
  }),
  code: z.string().trim().min(1, {
    message: 'Code is required',
  }),
})

export type CompleteTaskSchemaType = z.infer<typeof completeTaskSchema>
