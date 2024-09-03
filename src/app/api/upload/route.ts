import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

import { getAuthenticatedSession } from '@/lib/auth'
import { getFileUrl, getUploadConfig } from '@/lib/aws'

import { RequestBodySchema } from './validations'
import { UploadRequestBody, UploadResponseBody, UploadResponseError } from './types'

export async function POST(
  request: NextRequest
): Promise<NextResponse<UploadResponseBody | UploadResponseError>> {
  const { user } = await getAuthenticatedSession()

  const userId = user.id
  const body = await request.json()
  const schemaResult = RequestBodySchema.safeParse(body)

  if (!schemaResult.success) {
    console.error(schemaResult.error.errors)

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }

  const { filename, contentType, dimensions }: UploadRequestBody = schemaResult.data

  try {
    const key = `${userId}/${uuidv4()}/${filename}`
    const { url, fields } = await getUploadConfig({ key, contentType, userId, dimensions })
    const fileUrl = await getFileUrl(key)

    return NextResponse.json({ url, fileUrl, fields })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}
