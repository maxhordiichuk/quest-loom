import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { deleteTask as doDeleteTask, updateTask as doUpdateTask } from '@/server/services'
import { fetchTask } from '@/server/queries'
import { getSessionUser } from '@/server/auth'
import { taskNotFound } from '@/server/errors'
import { updateTaskSchema } from '@/schema'
import type { DeleteQuestResponseBody, UpdateTaskResponseBody } from '@/types/requests'

interface RequestParams {
  params: {
    taskId: string
  }
}

async function updateQuest(
  req: NextRequest,
  { params: { taskId } }: RequestParams
): Promise<NextResponse<UpdateTaskResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: { root: ['Unauthorized'] } }, { status: 401 })
  }

  const body = await req.json()
  const { data, error } = updateTaskSchema.safeParse(body)

  if (!data) {
    return NextResponse.json({ errors: error.flatten().fieldErrors }, { status: 400 })
  }

  const task = await fetchTask({ id: taskId, userId: user.id })

  if (!task) {
    return NextResponse.json({ errors: { root: [taskNotFound] } }, { status: 404 })
  }

  await doUpdateTask(task.id, data)

  return NextResponse.json({})
}

async function deleteQuest(
  _req: NextRequest,
  { params: { taskId } }: RequestParams
): Promise<NextResponse<DeleteQuestResponseBody>> {
  const user = await getSessionUser()

  if (!user) {
    return NextResponse.json({ errors: ['Unauthorized'] }, { status: 401 })
  }

  const task = await fetchTask({ id: taskId, userId: user.id })

  if (!task) {
    return NextResponse.json({ errors: [taskNotFound] }, { status: 404 })
  }

  await doDeleteTask(task)

  return NextResponse.json({})
}

export { updateQuest as PUT, updateQuest as PATCH, deleteQuest as DELETE }
