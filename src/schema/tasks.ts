import { z } from 'zod'

export const createTaskSchema = z.object({
  questId: z.string().trim().min(1, {
    message: 'Quest ID is required',
  }),
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

export type CreateTaskSchemaType = z.infer<typeof createTaskSchema>

export const updateTaskSchema = z.object({
  id: z.string().trim().min(1, {
    message: 'Task ID is required',
  }),
  questId: z.string().trim().min(1, {
    message: 'Quest ID is required',
  }),
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

export type UpdateTaskSchemaType = z.infer<typeof updateTaskSchema>

export const deleteTaskSchema = z.object({
  id: z.string().trim().min(1, {
    message: 'Task ID is required',
  }),
})

export type DeleteTaskSchemaType = z.infer<typeof deleteTaskSchema>

export const reorderTaskSchema = z.object({
  id: z.string().trim().min(1, {
    message: 'Task ID is required',
  }),
  oldIndex: z.number().int().min(0, {
    message: 'Old index must be a positive integer',
  }),
  newIndex: z.number().int().min(0, {
    message: 'New index must be a positive integer',
  }),
})

export type ReorderTaskSchemaType = z.infer<typeof reorderTaskSchema>
