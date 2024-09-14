import { notFound } from 'next/navigation'

import { completeTask, startAssignment } from '@/server/actions'
import { fetchAssignment, fetchQuest, fetchTaskAssignment } from '@/server/queries'
import { serializeQuest, serializeTask } from '@/server/serializers/player'

import { AssignmentConclusion } from '@/components/assignment-conclusion'
import { AssignmentIntroduction } from '@/components/assignment-introduction'
import { TaskShow } from '@/components/task-show'

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
        startAssignment={startAssignment}
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
