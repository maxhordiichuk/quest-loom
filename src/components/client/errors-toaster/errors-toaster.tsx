import { useEffect } from 'react'

import { useToast } from '@/hooks/use-toast'

import { Toaster } from '@/components/ui/toaster'

export interface ErrorsToasterProps {
  errors?: string[]
}

export function ErrorsToaster({ errors }: ErrorsToasterProps) {
  const { toast } = useToast()

  useEffect(() => {
    if (!errors?.length) {
      return
    }

    const description = errors.map(error => <p key={error}>{error}</p>)

    toast({ description, className: 'bg-red-200 text-red-900' })
  }, [errors, toast])

  return <Toaster />
}
