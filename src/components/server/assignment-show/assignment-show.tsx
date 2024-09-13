import { notFound } from 'next/navigation'

import { completeTask, startAssignment } from '@/actions'
import { fetchAssignment, fetchQuest, fetchTaskAssignment } from '@/db/queries'
import { serializeQuest, serializeTask } from '@/serializers/player'

import { AssignmentConclusion } from '@/components/client/assignment-conclusion'
import { AssignmentIntroduction } from '@/components/client/assignment-introduction'
import { TaskShow } from '@/components/client/task-show'

export interface AssignmentShowProps {
  id: string
}

export async function AssignmentShow({ id }: AssignmentShowProps) {
  const assignment = await fetchAssignment({ id })

  if (!assignment) {
    return notFound()
  }

  const quest = await fetchQuest({ id: assignment.questId })

  if (!quest) {
    return notFound()
  }

  const serializedQuest = await serializeQuest(quest)

  if (assignment.completedAt) {
    return <AssignmentConclusion quest={serializedQuest} />
  }

  if (!assignment.taskAssignmentId) {
    return (
      <AssignmentIntroduction
        assignmentId={id}
        quest={serializedQuest}
        formAction={startAssignment}
      />
    )
  }

  const taskAssignment = await fetchTaskAssignment({ id: assignment.taskAssignmentId })

  if (!taskAssignment) {
    return notFound()
  }

  const serializedTask = await serializeTask(taskAssignment.task)

  return <TaskShow task={serializedTask} assignmentId={id} completeTask={completeTask} />
}
