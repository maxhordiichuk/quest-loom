import { NextResponse } from 'next/server'

import { Assignment } from '@/db/types'
import { createAssignment } from '@/services'
import { serializeAssignment } from '@/serializers/serialize-assignment'

interface ErrorResponseBody {
  error: string
}

export async function POST(req: Request): Promise<NextResponse<Assignment | ErrorResponseBody>> {
  const body = await req.json()

  if (!body?.questId) {
    return NextResponse.json({ error: 'questId is required' }, { status: 400 })
  }

  const { questId } = body
  const assignment = await createAssignment({ questId })
  const serializedAssignment = serializeAssignment(assignment)

  return NextResponse.json(serializedAssignment)
}
