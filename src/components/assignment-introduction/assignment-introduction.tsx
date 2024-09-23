'use client'

import Image from 'next/image'

import fallbackQuestImage from '@/assets/quest-image.jpg'
import type { Quest } from '@/types/models/player'
import type { startAssignment as startAssignmentAction } from '@/server/actions'

import { PageContent } from '@/components/page-content'
import { PageHeading } from '@/components/page-heading'
import { SubmitButton } from '@/components/submit-button'

import { startQuestLabel } from './lib'

import { StartButton } from './start-button'

export interface AssignmentIntroductionProps {
  assignmentId?: string
  quest: Quest
  startAssignment?: typeof startAssignmentAction
}

export function AssignmentIntroduction({
  assignmentId,
  quest,
  startAssignment,
}: AssignmentIntroductionProps) {
  const questTitle = (
    <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-red-500 inline-block text-transparent bg-clip-text">
      Welcome to the Quest {quest.title}!
    </span>
  )

  return (
    <PageContent>
      <div className="bg-muted rounded-lg overflow-hidden">
        <Image
          src={quest.image?.url || fallbackQuestImage}
          alt="Quest cover image"
          width={1216}
          height={400}
          className="w-full h-[300px] sm:h-[400px] object-cover"
          style={{ aspectRatio: '1200/400', objectFit: 'cover' }}
        />
      </div>
      <PageHeading
        title={questTitle}
        subtitle={quest.description}
        isSeparatorVisible={false}
        className="pt-8"
      />
      <div className="mt-8">
        {assignmentId && startAssignment ? (
          <StartButton assignmentId={assignmentId} startAssignment={startAssignment} />
        ) : (
          <SubmitButton disabled>{startQuestLabel}</SubmitButton>
        )}
      </div>
    </PageContent>
  )
}
