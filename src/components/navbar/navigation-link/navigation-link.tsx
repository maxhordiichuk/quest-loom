import Link from 'next/link'
import { clsx } from 'clsx'

export interface NavigationLinkProps {
  href: string
  label: string
}

export function NavigationLink({ href, label }: NavigationLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'inline-flex items-center justify-center',
        'group h-9 w-max px-4 py-2 rounded-md',
        'text-sm font-medium transition-colors',
        'hover:bg-gray-100 hover:text-gray-900',
        'focus:bg-gray-100 focus:text-gray-900 focus:outline-none',
        'disabled:pointer-events-none disabled:opacity-50',
        'data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50'
      )}
      prefetch={false}
    >
      {label}
    </Link>
  )
}
