import { AssignmentShow } from '@/components/server/assignment-show'

interface AssignmentShowPageProps {
  params: {
    assignmentId: string
  }
}

export default async function AssignmentShowPage({ params }: AssignmentShowPageProps) {
  return <AssignmentShow id={params.assignmentId} />
}
