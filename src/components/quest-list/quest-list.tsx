import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import fallbackQuestImage from '@/assets/quest-image.jpg'
import paths from '@/lib/paths'
import type { Quest } from '@/types/models/creator'

import { Button } from '@/components/ui/button'
import { PageContent } from '@/components/page-content'
import { PageHeading } from '@/components/page-heading'

import { addNewQuestLabel, descriptionLabel, titleLabel } from './lib'

export interface QuestListProps {
  quests: Quest[]
}

export function QuestList({ quests }: QuestListProps) {
  return (
    <PageContent>
      <PageHeading title={titleLabel} subtitle={descriptionLabel}>
        <Button asChild>
          <Link href={paths.questNew}>
            <Plus className="w-4 h-4 mr-2" />
            {addNewQuestLabel}
          </Link>
        </Button>
      </PageHeading>

      <div className="grid gap-8">
        {quests.map(quest => (
          <Link
            key={quest.id}
            href={paths.questShow(quest.id)}
            className="flex items-center gap-12 w-full"
          >
            <div className="shrink-0 border rounded-md overflow-hidden">
              <Image
                src={quest.image?.url || fallbackQuestImage}
                alt="Quest cover image"
                className="object-cover w-64 h-36 hover:scale-105 transition-transform"
                width={300}
                height={200}
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{quest.title}</h2>
              <p>{quest.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </PageContent>
  )
}
