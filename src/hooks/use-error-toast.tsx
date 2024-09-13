import { useCallback } from 'react'

import { useToast } from '@/hooks/use-toast'

export function useErrorToast() {
  const { toast } = useToast()

  const toastErrors = useCallback(
    (errors: string[]) => {
      const description = errors.map(error => <p key={error}>{error}</p>)

      toast({ description, className: 'bg-red-200 text-red-900' })
    },
    [toast]
  )

  return { toastErrors }
}
