import { createQuest } from '@/actions'

import { QuestForm } from '@/components/client/quest-form'

export function QuestNew() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <QuestForm onSubmit={createQuest} />
    </div>
  )
}
