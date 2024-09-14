import { NextRequest, NextResponse } from 'next/server'

import { createQuest } from '@/services'
import { createQuestSchema } from '@/schema'
import { getSession } from '@/lib/auth'
import type { CreateQuestResponseBody } from '@/types/requests'

export async function POST(req: NextRequest): Promise<NextResponse<CreateQuestResponseBody>> {
  const session = await getSession()

  if (!session?.user) {
    return NextResponse.json({ errors: { root: ['Unauthorized'] } }, { status: 401 })
  }

  const body = await req.json()
  const result = createQuestSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ errors: result.error.flatten().fieldErrors }, { status: 400 })
  }

  const quest = await createQuest({ ...result.data, userId: session.user.id })

  return NextResponse.json({ questId: quest.id })
}
