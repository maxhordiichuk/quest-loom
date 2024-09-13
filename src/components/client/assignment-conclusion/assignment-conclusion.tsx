import type { Quest } from '@/types/models/player'

export interface AssignmentIntroductionProps {
  quest: Quest
}

export function AssignmentConclusion({ quest }: AssignmentIntroductionProps) {
  return (
    <div>
      <h1>{quest.title}</h1>
      <p>{quest.description}</p>
    </div>
  )
}
