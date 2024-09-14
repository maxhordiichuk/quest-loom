import { AssignmentShow } from '@/server/components/assignment-show'

interface AssignmentShowPageProps {
  params: {
    assignmentId: string
  }
}

export default async function AssignmentShowPage({ params }: AssignmentShowPageProps) {
  return <AssignmentShow id={params.assignmentId} />
}
