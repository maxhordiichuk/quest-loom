import { QueryClient, QueryClientProvider } from 'react-query'
import { FormContent } from '@/components/form-content'

export function withFormWrapper(Story: React.ElementType) {
  return (
    <FormContent>
      <Story />
    </FormContent>
  )
}

export function withQueryClientProvider(Story: React.ElementType) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  )
}
