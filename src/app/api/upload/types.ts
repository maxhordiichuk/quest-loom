import { z } from 'zod'

import { RequestBodySchema } from './validations'

type Fields = Record<string, string>

export type UploadRequestBody = z.infer<typeof RequestBodySchema>

export interface UploadResponseBodySuccess {
  url: string
  fileUrl: string
  fields: Fields
}

export interface UploadResponseBodyError {
  error: string
}

export type UploadResponseBody = UploadResponseBodySuccess | UploadResponseBodyError
