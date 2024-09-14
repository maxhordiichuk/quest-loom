import { cn } from '@/lib/utils'

export interface PageContentProps {
  className?: string
  children: React.ReactNode
}

export function PageContent({ className, children }: PageContentProps) {
  return <main className={cn('container py-20 max-w-7xl', className)}>{children}</main>
}
