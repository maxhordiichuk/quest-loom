import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { MenuIcon, MountainIcon } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import paths from '@/lib/paths'
import type { User } from '@/types/models/creator'

import { projectNameLabel, questsLabel } from './lib'

import { Profile } from './profile'

export interface NavbarProps {
  user: User
}

export function Navbar({ user }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-10 bg-white shadow dark:shadow-dark inset-x-0">
      <div className="container max-w-7xl">
        <div className="flex items-center h-16">
          <Link href={paths.home} className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">{projectNameLabel}</span>
          </Link>
          <div className="flex-1" />
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuLink asChild>
                <Link
                  href={paths.questList}
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                  prefetch={false}
                >
                  {questsLabel}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
          <Profile user={user} />
          <Button variant="outline" className="ml-2 lg:hidden">
            <MenuIcon className="w-4 h-4" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
