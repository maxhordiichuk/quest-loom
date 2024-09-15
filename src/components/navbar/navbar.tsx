import Link from 'next/link'

import paths from '@/lib/paths'
import type { User } from '@/types/models/creator'

import { Button } from '@/components/ui/button'
import { MenuIcon, MountainIcon } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { projectNameLabel, questsLabel } from './lib'

import { NavigationLink } from './navigation-link'
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
                <NavigationLink href={paths.questList} label={questsLabel} />
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
