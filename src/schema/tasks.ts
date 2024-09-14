import { z } from 'zod'

const taskSchema = z.object({
  title: z.string().trim().min(1, {
    message: 'Title is required',
  }),
  description: z.string().trim().min(1, {
    message: 'Description is required',
  }),
  code: z.string().trim().min(1, {
    message: 'Code is required',
  }),
  imageKey: z.string().optional().nullable(),
})

export const createTaskSchema = taskSchema

export type CreateTaskSchemaType = z.infer<typeof createTaskSchema>

export const updateTaskSchema = taskSchema

export type UpdateTaskSchemaType = z.infer<typeof updateTaskSchema>

export const moveTaskSchema = z.object({
  oldIndex: z.number().int().min(0, {
    message: 'Old index must be a positive integer',
  }),
  newIndex: z.number().int().min(0, {
    message: 'New index must be a positive integer',
  }),
})

export type MoveTaskSchemaType = z.infer<typeof moveTaskSchema>
