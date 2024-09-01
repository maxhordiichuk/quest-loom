import Image from 'next/image'

import placeholderImage from './placeholder-image.svg'

export type PlaceholderImageProps = Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'> & {
  src?: string
  alt?: string
}

export function PlaceholderImage(props?: PlaceholderImageProps) {
  return (
    <Image src={placeholderImage} alt="Placeholder image" width={1200} height={1200} {...props} />
  )
}
