import Image from 'next/image'
import { ReactElement } from 'react'
import { clsx } from 'clsx'

export interface TaskImageProps {
  className?: string
  src: string
  alt: string
  width: number
  height: number
}

export function TaskImage({ className, src, alt, width, height }: TaskImageProps): ReactElement {
  return (
    <Image
      src={src}
      className={clsx(
        'overflow-hidden rounded-xl object-cover object-center w-full max-h-[512px]',
        className
      )}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
