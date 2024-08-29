import { z } from 'zod'

import { RequestBodySchema } from './validations'

type Fields = Record<string, string>

export type UploadRequestBody = z.infer<typeof RequestBodySchema>

export interface UploadResponseBody {
  url: string
  fileUrl: string
  fields: Fields
}

export interface UploadResponseError {
  error: string
}
