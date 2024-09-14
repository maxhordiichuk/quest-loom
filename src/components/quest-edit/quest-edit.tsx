import { QuestForm } from '@/components/quest-form'

import { updateQuest } from '@/lib/client'
import type { Quest } from '@/types/models/creator'
import type { UpdateQuestRequestBody } from '@/types/requests'

export interface QuestEditProps {
  quest: Quest
}

export function QuestEdit({ quest }: QuestEditProps) {
  const handleSubmit = (body: UpdateQuestRequestBody) => {
    return updateQuest(quest.id, body)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <QuestForm quest={quest} onSubmit={handleSubmit} />
    </div>
  )
}
