import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { deleteQuest as doDeleteQuest, updateQuest as doUpdateQuest } from '@/server/services'
import { fetchQuest } from '@/server/queries'
import { getSessionUser } from '@/server/auth'
import { questNotFound } from '@/server/errors'
import { updateQuestSchema } from '@/schema'
import type { DeleteQuestResponseBody, UpdateQuestResponseBody } from '@/types/requests'

interface RequestParams {
  params: {
    questId: string
  }
}

async function updateQuest(
  req: NextRequest,
  { params: { questId } }: RequestParams
): Promise<NextResponse<UpdateQuestResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: { root: ['Unauthorized'] } }, { status: 401 })
  }

  const body = await req.json()
  const { data, error } = updateQuestSchema.safeParse(body)

  if (!data) {
    return NextResponse.json({ errors: error.flatten().fieldErrors }, { status: 400 })
  }

  const quest = await fetchQuest({ id: questId, userId: user.id })

  if (!quest) {
    return NextResponse.json({ errors: { root: [questNotFound] } }, { status: 404 })
  }

  await doUpdateQuest(quest.id, data)

  return NextResponse.json({ questId: quest.id })
}

async function deleteQuest(
  _req: NextRequest,
  { params: { questId } }: RequestParams
): Promise<NextResponse<DeleteQuestResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: ['Unauthorized'] }, { status: 401 })
  }

  const quest = await fetchQuest({ id: questId, userId: user.id })

  if (!quest) {
    return NextResponse.json({ errors: [questNotFound] }, { status: 404 })
  }

  await doDeleteQuest(quest)

  return NextResponse.json({})
}

export { updateQuest as PUT, updateQuest as PATCH, deleteQuest as DELETE }
