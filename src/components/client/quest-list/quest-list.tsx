import Image from 'next/image'
import Link from 'next/link'
import { Plus } from 'lucide-react'

import paths from '@/lib/paths'

import type { Quest } from '@/db/types'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { addNewQuestLabel, editQuestLabel } from './lib'

import { ActionsMenu } from './actions-menu'

export interface QuestListProps {
  quests: Quest[]
}

export function QuestList({ quests }: QuestListProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Available Quests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quests.map(quest => (
          <Card key={quest.id} className="flex flex-col overflow-hidden">
            <CardHeader className="p-0">
              {quest.cover && (
                <Image
                  src={quest.cover.url}
                  alt={`Cover image for ${quest.title}`}
                  className="w-full h-48 object-cover"
                  width={quest.cover.width}
                  height={quest.cover.height}
                />
              )}
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl">{quest.title}</CardTitle>
                <ActionsMenu questId={quest.id} />
              </div>
              <p className="text-muted-foreground">{quest.description}</p>
            </CardContent>
            <CardFooter className="p-4">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                size="lg"
              >
                <Link href={paths.questEdit(quest.id)}>{editQuestLabel}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Card className="flex flex-col overflow-hidden border-2 border-dashed border-primary/50 bg-primary/5 hover:bg-primary/10 transition-colors group">
          <CardContent className="flex-grow flex items-center justify-center p-6">
            <Link
              className="w-full h-full flex flex-col items-center justify-center gap-4 text-primary hover:text-primary/80 hover:bg-transparent"
              href={paths.questNew}
            >
              <Plus className="h-12 w-12" />
              <span className="text-xl font-semibold">{addNewQuestLabel}</span>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
