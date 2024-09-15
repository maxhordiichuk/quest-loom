import React, {ElementType} from "react";
import { QueryClient, QueryClientProvider } from 'react-query'

export function withFormWrapper(Story: ElementType) {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <Story />
    </div>
  )
}

export function withQueryClientProvider(Story: ElementType) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  )
}
