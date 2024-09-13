'use client'

import Image from 'next/image'
import { useFormState } from 'react-dom'

import fallbackQuestImage from '@/assets/fallback-quest-image.jpg'
import type { Quest } from '@/types/models/player'
import type { startAssignment } from '@/actions'

import { Button } from '@/components/ui/button'
import { ErrorsToaster } from '@/components/client/errors-toaster'
import { PageContent } from '@/components/client/page-content'
import { PageHeading } from '@/components/client/page-heading'

import { startQuestLabel } from './lib'

export interface AssignmentIntroductionProps {
  assignmentId: string
  quest: Quest
  formAction: typeof startAssignment
}

export function AssignmentIntroduction({
  assignmentId,
  quest,
  formAction,
}: AssignmentIntroductionProps) {
  const [formState, startAssignmentAction] = useFormState(formAction, {})

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
      <form action={startAssignmentAction} className="mt-8">
        <input type="hidden" name="id" value={assignmentId} />
        <Button type="submit" className="px-8">
          {startQuestLabel}
        </Button>
      </form>
      <ErrorsToaster errors={formState?.errors} />
    </PageContent>
  )
}
