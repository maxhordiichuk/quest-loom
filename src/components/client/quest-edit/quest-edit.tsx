import { QuestForm } from '@/components/client/quest-form'
import { createQuest } from '@/actions'

import type { Quest } from '@/db/types'

export interface QuestEditProps {
  quest: Quest
}

export function QuestEdit({ quest }: QuestEditProps) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <QuestForm quest={quest} formAction={createQuest} />
    </div>
  )
}
