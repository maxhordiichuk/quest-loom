import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { createQuestSchema } from '@/schema'
import { createQuest as doCreateQuest } from '@/server/services'
import { getSessionUser } from '@/server/auth'
import type { CreateQuestResponseBody } from '@/types/requests'

async function createQuest(req: NextRequest): Promise<NextResponse<CreateQuestResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: { root: ['Unauthorized'] } }, { status: 401 })
  }

  const body = await req.json()
  const { data, error } = createQuestSchema.safeParse(body)

  if (!data) {
    return NextResponse.json({ errors: error.flatten().fieldErrors }, { status: 400 })
  }

  const quest = await doCreateQuest({ ...data, userId: user.id })

  return NextResponse.json({ questId: quest.id })
}

export { createQuest as POST }
