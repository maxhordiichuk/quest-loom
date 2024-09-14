import { getAuthenticatedSession } from '@/server/auth'

import { TaskShow } from '@/server/components/task-show'

interface TaskShowPageProps {
  params: {
    taskId: string
  }
}

export default async function TaskShowPage({ params }: TaskShowPageProps) {
  const { user } = await getAuthenticatedSession()

  return <TaskShow id={params.taskId} userId={user.id} />
}
