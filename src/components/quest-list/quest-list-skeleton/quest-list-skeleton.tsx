import { PageContent } from '@/components/page-content'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

export function QuestListSkeleton() {
  return (
    <PageContent>
      <Skeleton className="w-1/4 h-10" />
      <Skeleton className="mt-2 h-6" />
      <Separator className="my-8" />
      <div className="grid gap-8 mt-4">
        <div className="flex items-center gap-12">
          <Skeleton className="flex-shrink-0 w-64 h-36" />
          <div className="w-full">
            <Skeleton className="w-64 h-8" />
            <Skeleton className="mt-2 w-full h-10" />
          </div>
        </div>

        <div className="flex items-center gap-12">
          <Skeleton className="flex-shrink-0 w-64 h-36" />
          <div className="w-full">
            <Skeleton className="w-64 h-8" />
            <Skeleton className="mt-2 w-full h-10" />
          </div>
        </div>

        <div className="flex items-center gap-12">
          <Skeleton className="flex-shrink-0 w-64 h-36" />
          <div className="w-full">
            <Skeleton className="w-64 h-8" />
            <Skeleton className="mt-2 w-full h-10" />
          </div>
        </div>
      </div>
    </PageContent>
  )
}
