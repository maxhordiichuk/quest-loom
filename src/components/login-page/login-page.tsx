import { MountainIcon } from 'lucide-react'
import { clsx } from 'clsx'

import paths from '@/lib/paths'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import {
  loginDescriptionLabel,
  loginLabel,
  projectDescriptionLabel,
  projectNameLabel,
  submitButtonLabel,
} from './lib'

interface LoginPageProps {
  csrfToken?: string
}

export function LoginPage({ csrfToken }: LoginPageProps) {
  return (
    <div className="w-full min-h-screen lg:grid lg:grid-cols-2">
      <div
        className={clsx(
          'hidden bg-secondary text-secondary-foreground p-10',
          'lg:flex lg:flex-col lg:justify-between'
        )}
      >
        <div className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">{projectNameLabel}</span>
        </div>

        <div className="text-lg">
          <p>{projectDescriptionLabel}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between lg:justify-center gap-16 p-10 min-h-screen">
        <div className="flex items-center gap-2 lg:hidden">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">{projectNameLabel}</span>
        </div>

        <div className="mx-auto grid max-w-96 gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{loginLabel}</h1>
            <p className="text-balance text-muted-foreground">{loginDescriptionLabel}</p>
          </div>

          <form method="POST" action={paths.apiAuthSignIn} className="grid gap-4">
            <input name="csrfToken" type="hidden" value={csrfToken} />
            <Input name="email" type="email" placeholder="email@example.com" required />
            <Button type="submit" className="w-full">
              {submitButtonLabel}
            </Button>
          </form>
        </div>

        <div className="text-lg lg:hidden">
          <p>{projectDescriptionLabel}</p>
        </div>
      </div>
    </div>
  )
}
