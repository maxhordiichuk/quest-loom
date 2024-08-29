import Image from 'next/image'
import { ReactElement } from 'react'
import { cn } from '@/lib/utils'

export interface TaskImageProps {
  className?: string
  src: string
  alt: string
}

export function TaskImage({ className, src, alt }: TaskImageProps): ReactElement {
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
