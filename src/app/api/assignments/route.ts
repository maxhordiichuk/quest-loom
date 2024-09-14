import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { createAssignment } from '@/server/services'
import { serializeAssignment } from '@/server/serializers/creator'
import type { Assignment } from '@/types/models/creator'

interface ErrorResponseBody {
  error: string
}

export async function POST(req: NextRequest): Promise<NextResponse<Assignment | ErrorResponseBody>> {
  const body = await req.json()

  if (!body?.questId) {
    return NextResponse.json({ error: 'questId is required' }, { status: 400 })
  }

  const { questId } = body
  const assignment = await createAssignment({ questId })
  const serializedAssignment = serializeAssignment(assignment)

  return NextResponse.json(serializedAssignment)
}
