import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { createAssignment as doCreateAssignment } from '@/server/services'
import { fetchQuest } from '@/server/queries'
import { getSessionUser } from '@/server/auth'
import { questNotFound } from '@/server/errors'
import { serializeAssignment } from '@/server/serializers/creator'
import type { CreateAssignmentResponseBody } from '@/types/requests'

interface RequestParams {
  params: {
    questId: string
  }
}

async function createAssignment(
  _req: NextRequest,
  { params: { questId } }: RequestParams
): Promise<NextResponse<CreateAssignmentResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: ['Unauthorized'] }, { status: 401 })
  }

  const quest = await fetchQuest({ id: questId, userId: user.id })

  if (!quest) {
    return NextResponse.json({ errors: [questNotFound] }, { status: 404 })
  }

  const assignment = await doCreateAssignment({ questId })

  const serializedAssignment = serializeAssignment(assignment)

  return NextResponse.json(serializedAssignment)
}

export { createAssignment as POST }
