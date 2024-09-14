import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { createTaskSchema } from '@/schema'
import { createTask as doCreateTask } from '@/server/services'
import { fetchQuest } from '@/server/queries'
import { getSessionUser } from '@/server/auth'
import { questNotFound } from '@/server/errors'
import type { CreateTaskResponseBody } from '@/types/requests'

interface RequestParams {
  params: {
    questId: string
  }
}

async function createTask(
  req: NextRequest,
  { params: { questId } }: RequestParams
): Promise<NextResponse<CreateTaskResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: { root: ['Unauthorized'] } }, { status: 401 })
  }

  const body = await req.json()
  const { data, error } = createTaskSchema.safeParse(body)

  if (!data) {
    return NextResponse.json({ errors: error.flatten().fieldErrors }, { status: 400 })
  }

  const quest = await fetchQuest({ id: questId, userId: user.id })

  if (!quest) {
    return NextResponse.json({ errors: { root: [questNotFound] } }, { status: 404 })
  }

  await doCreateTask({ ...data, questId })

  return NextResponse.json({})
}

export { createTask as POST }
