import { PageContent } from '@/components/page-content'
import { Skeleton } from '@/components/ui/skeleton'

export function TaskShowSkeleton() {
  return (
    <PageContent>
      <div className="grid items-center justify-center gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <Skeleton className="w-20 h-7" />
          <Skeleton className="h-20" />
          <Skeleton className="h-32" />
          <Skeleton className="w-44 h-10" />
        </div>

        <Skeleton className="mx-auto w-full h-[500px]" />
      </div>
    </PageContent>
  )
}
