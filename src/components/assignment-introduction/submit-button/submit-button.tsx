import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'

import { startQuestLabel } from '../lib'

export function SubmitButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { pending } = useFormStatus()

  return (
    <Button className="px-8" type="submit" loading={pending} {...props}>
      {startQuestLabel}
    </Button>
  )
}
