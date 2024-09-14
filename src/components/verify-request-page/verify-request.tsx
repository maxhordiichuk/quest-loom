import Link from 'next/link'

import paths from '@/lib/paths'

export function VerifyRequest() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen p-10">
      <div>
        <h1 className="text-3xl">Check your email</h1>

        <p className="mt-1">
          A sign in link has been sent to your email address. Click the link in the email to sign
          in.
        </p>

        <p className="text-gray-600 mt-8">
          Already signed in?{' '}
          <Link href={paths.home} className="underline hover:text-gray-800">
            Go to your dashboard
          </Link>
        </p>
      </div>
    </div>
  )
}
