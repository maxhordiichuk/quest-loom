import { ReactElement } from 'react'

import { Button } from '@/components/ui/button'
import { TaskImage } from '@/components/task-image'

import { completeQuestLabel, taskNumberLabel } from './lib/labels'

export interface QuestProps {
  taskNumber: number
  title: string
  description: string
  imageURL: string
}

export function Quest({ title, description, taskNumber, imageURL }: QuestProps): ReactElement {
  return (
    <main className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="pb-7">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm mb-1">
            {taskNumberLabel}
            {taskNumber}
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/tight">
              {title}
            </h1>

            <TaskImage className="mx-auto lg:hidden" src={imageURL} alt={title} />

            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>

            <Button className="px-8">{completeQuestLabel}</Button>
          </div>
        </div>

        <TaskImage className="mx-auto hidden lg:block" src={imageURL} alt={title} />
      </div>
    </main>
  )
}
