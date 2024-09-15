'use client'

import { createQuest } from '@/lib/client'

import { FormContent } from '@/components/form-content'
import { QuestForm } from '@/components/quest-form'

export function QuestNew() {
  return (
    <FormContent>
      <QuestForm onSubmit={createQuest} />
    </FormContent>
  )
}
