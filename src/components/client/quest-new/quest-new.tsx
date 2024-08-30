import { QuestForm } from '@/components/client/quest-form'
import { createQuest } from '@/actions'

export function QuestNew() {
  return <QuestForm formAction={createQuest} />
}
