import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'

import { getFileUrl, getUploadConfig } from '@/lib/aws'
import { getSession } from '@/lib/auth'

import { RequestBodySchema } from './validations'
import { UploadRequestBody, UploadResponseBody } from './types'

export async function POST(request: NextRequest): Promise<NextResponse<UploadResponseBody>> {
  const session = await getSession()

  if (!session || !session.user) {
    return NextResponse.json({ error: 'You must be signed in to do this' }, { status: 401 })
  }

  const { user } = session
  const body = await request.json()
  const result = RequestBodySchema.safeParse(body)

  if (!result.success) {
    // eslint-disable-next-line no-console
    console.error(result.error.errors)

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }

  const { filename, contentType }: UploadRequestBody = result.data

  try {
    const key = `${user.id}/${uuidv4()}/${filename}`
    const { url, fields } = await getUploadConfig(key, contentType)
    const fileUrl = await getFileUrl(key)

    return NextResponse.json({ url, fileUrl, fields })
  } catch (error) {
    if (error instanceof Error) {
      // eslint-disable-next-line no-console
      console.error(error.message)
    }

    return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
  }
}
