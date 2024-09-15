import { Skeleton } from '@/components/ui/skeleton'

export function QuestFormSkeleton() {
  return (
    <div className="grid gap-4">
      <Skeleton className="h-[72px]" />
      <Skeleton className="h-28" />
      <Skeleton className="h-[72px]" />
      <Skeleton className="w-36 h-10" />
    </div>
  )
}
