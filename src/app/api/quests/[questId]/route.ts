import { NextRequest, NextResponse } from 'next/server'

import { deleteQuest, updateQuest } from '@/services'
import { fetchQuest } from '@/db/queries'
import { getSession } from '@/lib/auth'
import { questNotFound } from '@/actions/errors'
import { updateQuestSchema } from '@/schema'
import type { DeleteQuestResponseBody, UpdateQuestResponseBody } from '@/types/requests'

interface RequestParams {
  params: {
    questId: string
  }
}

export async function PUT(
  req: NextRequest,
  { params: { questId } }: RequestParams
): Promise<NextResponse<UpdateQuestResponseBody>> {
  const session = await getSession()

  if (!session?.user) {
    return NextResponse.json({ errors: { root: ['Unauthorized'] } }, { status: 401 })
  }

  const body = await req.json()
  const result = updateQuestSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 })
  }

  const quest = await fetchQuest({ id: questId, userId: session.user.id })

  if (!quest) {
    return NextResponse.json({ errors: { root: [questNotFound] } }, { status: 404 })
  }

  await updateQuest(quest.id, result.data)

  return NextResponse.json({ questId: quest.id })
}

export async function DELETE(
  _req: NextRequest,
  { params: { questId } }: RequestParams
): Promise<NextResponse<DeleteQuestResponseBody>> {
  const session = await getSession()

  if (!session?.user) {
    return NextResponse.json({ errors: ['Unauthorized'] }, { status: 401 })
  }

  const quest = await fetchQuest({ id: questId, userId: session.user.id })

  if (!quest) {
    return NextResponse.json({ errors: [questNotFound] }, { status: 404 })
  }

  await deleteQuest(quest)

  return NextResponse.json({})
}
