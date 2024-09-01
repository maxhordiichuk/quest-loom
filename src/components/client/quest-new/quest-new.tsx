import { QuestForm } from '@/components/client/quest-form'
import { createQuest } from '@/actions'

export function QuestNew() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <QuestForm formAction={createQuest} />
    </div>
  )
}
