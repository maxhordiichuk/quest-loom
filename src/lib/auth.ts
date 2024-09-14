import EmailProvider from 'next-auth/providers/email'
import NextAuth, { getServerSession } from 'next-auth'
import getConfig from 'next/config'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import type { AdapterUser } from 'next-auth/adapters'
import type { JWT } from 'next-auth/jwt'
import type { Session } from 'next-auth'

import paths from '@/lib/paths'
import { db } from '@/db'

const { serverRuntimeConfig: config } = getConfig()

interface SessionCallbackProps {
  session: Session
  user: AdapterUser
  token?: JWT
}

export const nextAuthConfig = {
  adapter: PrismaAdapter(db),
  providers: [
    EmailProvider({
      server: config.mailer.server,
      from: config.mailer.from,
      maxAge: config.mailer.tokenMaxAge,
    }),
  ],
  callbacks: {
    async session({ session, user }: SessionCallbackProps) {
      if (!session?.user) {
        return session
      }

      return {
        ...session,
        user: { ...session.user, id: user.id },
      }
    },
  },
  pages: {
    signIn: paths.signIn,
    verifyRequest: paths.verifyRequest,
  },
}

const handler = NextAuth(nextAuthConfig)

function getSession() {
  return getServerSession(nextAuthConfig)
}

async function getSessionUser() {
  const session = await getSession()

  return session?.user
}

async function getAuthenticatedSession() {
  const session = await getSession()

  if (!session?.user) {
    return redirect(paths.signIn)
  }

  return session
}

function getCsrfToken() {
  return cookies().get('next-auth.csrf-token')?.value.split('|')[0]
}

export {
  handler as GET,
  handler as POST,
  getSession,
  getSessionUser,
  getAuthenticatedSession,
  getCsrfToken,
}
