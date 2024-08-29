'use client'

import { QuestForm } from '@/components/quest-form'
import { createQuest } from '@/actions'

export function QuestNew() {
  return <QuestForm formAction={createQuest} />
}
