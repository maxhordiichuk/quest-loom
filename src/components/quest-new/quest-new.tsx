'use client'

import { createQuest } from '@/lib/client'

import { QuestForm } from '@/components/quest-form'

export function QuestNew() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <QuestForm onSubmit={createQuest} />
    </div>
  )
}
