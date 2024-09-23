import { useFormStatus } from 'react-dom'

import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function SubmitButton({ children, className, ...props }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button className={cn('px-8', className)} type="submit" loading={pending} {...props}>
      {children}
    </Button>
  )
}
