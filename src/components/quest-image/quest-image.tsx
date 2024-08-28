import Image from 'next/image'
import { ReactElement } from 'react'
import { cn } from '@/lib/utils'

export interface QuestImageProps {
  className?: string
  src: string
  alt: string
}

export function QuestImage({ className, src, alt }: QuestImageProps): ReactElement {
  return (
    <Image
      src={src}
      className={cn(
        'mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center',
        className
      )}
      alt={alt}
      width={600}
      height={400}
    />
  )
}
