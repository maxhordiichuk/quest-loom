import { Separator } from '@/components/ui/separator'

export interface PageHeadingProps {
  title: string | React.ReactNode
  subtitle?: string | null
  isSeparatorVisible?: boolean
  className?: string
  children?: React.ReactNode
}

export function PageHeading({
  title,
  subtitle,
  isSeparatorVisible = true,
  className,
  children,
}: PageHeadingProps) {
  return (
    <div className={className}>
      <div className="grid gap-2">
        <div className="flex items-start">
          <h1 className="text-4xl font-bold">{title}</h1>
          {children && <div className="ml-auto">{children}</div>}
        </div>

        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>

      {isSeparatorVisible && <Separator className="my-8" />}
    </div>
  )
}
