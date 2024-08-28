import EmailProvider from 'next-auth/providers/email'
import NextAuth, { getServerSession } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { db } from '@/db'

import type { AdapterUser } from 'next-auth/adapters'
import type { JWT } from 'next-auth/jwt'
import type { Session } from 'next-auth'

interface SessionCallbackProps {
  session: Session
  user: AdapterUser
  token?: JWT
}

export const config = {
  adapter: PrismaAdapter(db),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // 24 hours
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
}

const handler = NextAuth(config)

function getSession() {
  return getServerSession(config)
}

export { handler as GET, handler as POST, getSession }
