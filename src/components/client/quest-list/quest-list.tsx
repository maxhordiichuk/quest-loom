import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import paths from '@/lib/paths'

import type { Quest } from '@/db/types'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { addNewQuestLabel, descriptionLabel, titleLabel } from './lib'

export interface QuestListProps {
  quests: Quest[]
}

export function QuestList({ quests }: QuestListProps) {
  return (
    <div className="container mx-auto py-20">
      <div className="mt-6 space-y-2">
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-bold">{titleLabel}</h1>
          <Button asChild>
            <Link href={paths.questNew}>
              <Plus />
              {addNewQuestLabel}
            </Link>
          </Button>
        </div>

        <p className="text-muted-foreground">{descriptionLabel}</p>
      </div>

      <Separator className="my-8" />

      <div className="grid gap-8">
        {quests.map(quest => (
          <Link
            key={quest.id}
            href={paths.questShow(quest.id)}
            className="flex items-center gap-12 w-full group"
          >
            {quest.image && (
              <div className="shrink-0 border rounded-md overflow-hidden">
                <Image
                  src={quest.image.url}
                  alt={`Cover image for ${quest.title}`}
                  className="object-cover w-64 h-36 group-hover:scale-105 transition-transform"
                  width={200}
                  height={100}
                />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-semibold">{quest.title}</h2>
              <p>{quest.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
