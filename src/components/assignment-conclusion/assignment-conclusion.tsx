import Image from 'next/image'

import fallbackQuestImage from '@/assets/fallback-quest-image.jpg'
import type { Quest } from '@/types/models/player'

import { PageContent } from '@/components/page-content'
import { PageHeading } from '@/components/page-heading'

import { subtitleLabel, titleLabel } from './lib'

export interface AssignmentConclusionProps {
  quest: Quest
}

export function AssignmentConclusion({ quest }: AssignmentConclusionProps) {
  const title = (
    <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-red-500 inline-block text-transparent bg-clip-text">
      {titleLabel(quest.title)}
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
        title={title}
        subtitle={subtitleLabel}
        isSeparatorVisible={false}
        className="pt-8"
      />
    </PageContent>
  )
}
