import type { User } from '@/db/types'

import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { getInitials, logoutLabel, profileLabel, toggleMenuLabel } from './lib'

interface ProfileProps {
  user: User
}

export function Profile({ user }: ProfileProps) {
  const initials = getInitials(user.name)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar?.url} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="sr-only">{toggleMenuLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center gap-2 p-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar?.url} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5 leading-none">
            <div className="font-semibold">{user.name}</div>
            <div className="text-sm text-muted-foreground">{user.email}</div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="#profile" className="flex items-center gap-2" prefetch={false}>
            <div className="h-4 w-4" />
            <span>{profileLabel}</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#logout" className="flex items-center gap-2" prefetch={false}>
            <div className="h-4 w-4" />
            <span>{logoutLabel}</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
