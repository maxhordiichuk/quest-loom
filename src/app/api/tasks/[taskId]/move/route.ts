import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { moveTask as doMoveTask } from '@/server/services'
import { failedToReorderTasks, taskNotFound } from '@/server/errors'
import { fetchTask } from '@/server/queries'
import { getSessionUser } from '@/server/auth'
import { moveTaskSchema } from '@/schema'
import type { MoveTaskResponseBody } from '@/types/requests/move-task'

interface RequestParams {
  params: {
    taskId: string
  }
}

async function moveTask(
  req: NextRequest,
  { params: { taskId } }: RequestParams
): Promise<NextResponse<MoveTaskResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: ['Unauthorized'] }, { status: 401 })
  }

  const task = await fetchTask({ id: taskId, userId: user.id })

  if (!task) {
    return NextResponse.json({ errors: [taskNotFound] }, { status: 404 })
  }

  const body = await req.json()
  const { data } = moveTaskSchema.safeParse(body)

  if (!data) {
    return NextResponse.json({ errors: [failedToReorderTasks] }, { status: 400 })
  }

  await doMoveTask({ ...data, task })

  return NextResponse.json({})
}

export { moveTask as POST }
