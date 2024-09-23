'use client'

import { UserIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import type { User } from '@/types/models/creator'

import { logoutLabel, toggleMenuLabel } from './lib'

interface ProfileProps {
  user: User
}

export function Profile({ user }: ProfileProps) {
  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label={toggleMenuLabel}>
          <UserIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="text-sm text-muted-foreground p-2">{user.email}</div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>{logoutLabel}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
