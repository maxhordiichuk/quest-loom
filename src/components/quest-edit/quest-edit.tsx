'use client'

import { QuestForm } from '@/components/quest-form'
import { createQuest } from '@/actions'

import type { Quest } from '@/db/types'

export interface QuestEditProps {
  quest: Quest
}

export function QuestEdit({ quest }: QuestEditProps) {
  return <QuestForm quest={quest} formAction={createQuest} />
}
