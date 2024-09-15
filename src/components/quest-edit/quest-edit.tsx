'use client'

import { QuestForm } from '@/components/quest-form'

import { updateQuest } from '@/lib/client'
import type { Quest } from '@/types/models/creator'
import type { UpdateQuestRequestBody } from '@/types/requests'

import { FormContent } from '@/components/form-content'

export interface QuestEditProps {
  quest: Quest
}

export function QuestEdit({ quest }: QuestEditProps) {
  const handleSubmit = (body: UpdateQuestRequestBody) => {
    return updateQuest(quest.id, body)
  }

  return (
    <FormContent>
      <QuestForm quest={quest} onSubmit={handleSubmit} />
    </FormContent>
  )
}
