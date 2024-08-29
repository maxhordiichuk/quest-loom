import { z } from 'zod'

export const RequestBodySchema = z.object({
  filename: z.string(),
  contentType: z.string(),
  dimensions: z.object({
    width: z.number(),
    height: z.number(),
  }),
})
