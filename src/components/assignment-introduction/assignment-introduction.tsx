'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import fallbackQuestImage from '@/assets/quest-image.jpg'
import { useErrorToast } from '@/hooks/use-error-toast'
import type { Quest } from '@/types/models/player'
import type { StartAssignmentAction } from '@/types/requests'

import { Button } from '@/components/ui/button'
import { PageContent } from '@/components/page-content'
import { PageHeading } from '@/components/page-heading'

import { startQuestLabel } from './lib'

export interface AssignmentIntroductionProps {
  assignmentId: string
  quest: Quest
  startAssignment: StartAssignmentAction
}

export function AssignmentIntroduction({
  assignmentId,
  quest,
  startAssignment,
}: AssignmentIntroductionProps) {
  const { toastErrors } = useErrorToast()
  const router = useRouter()

  const handleSubmit = async () => {
    const result = await startAssignment({ id: assignmentId })

    if (result.errors) {
      toastErrors(result.errors)
      return
    }

    router.refresh()
  }

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
      <Button className="px-8 mt-8" onClick={handleSubmit}>
        {startQuestLabel}
      </Button>
    </PageContent>
  )
}
