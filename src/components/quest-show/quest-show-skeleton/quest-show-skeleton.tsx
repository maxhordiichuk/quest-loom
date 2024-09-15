import { PageContent } from '@/components/page-content'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

export function QuestShowSkeleton() {
  return (
    <PageContent className="pt-8">
      <Skeleton className="h-[400px]" />
      <Skeleton className="mt-8 w-1/4 h-10" />
      <Skeleton className="mt-2 h-12" />
      <Separator className="my-8" />
      <Skeleton className="w-32 h-10" />
      <div className="grid gap-4 mt-4">
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </div>
    </PageContent>
  )
}
