import Link from 'next/link'

import paths from '@/lib/paths'

import type { User } from '@/db/types'

import { projectNameLabel, questsLabel } from './lib'

import { MountainIcon } from './mountain-icon'
import { Profile } from './profile'

export interface NavbarProps {
  user: User
}

export function Navbar({ user }: NavbarProps) {
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <Link href={paths.home} className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">{projectNameLabel}</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link
            href={paths.questList}
            className="text-sm font-medium transition-colors hover:text-primary"
            prefetch={false}
          >
            {questsLabel}
          </Link>
        </nav>
      </div>
      <Profile user={user} />
    </header>
  )
}
