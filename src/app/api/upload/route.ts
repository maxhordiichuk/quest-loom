import { NextRequest, NextResponse } from 'next/server'

import { generateTempKey, getFileUrl, getUploadConfig } from '@/lib/aws'
import { getAuthenticatedSession } from '@/lib/auth'

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
    const key = generateTempKey(filename)
    const { url, fields } = await getUploadConfig({ key, contentType, userId, dimensions })
    const fileUrl = getFileUrl(key)

    return NextResponse.json({ url, fileUrl, fields })
  } catch (error) {
    console.error(error)

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}
