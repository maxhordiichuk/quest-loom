import EmailProvider from 'next-auth/providers/email'
import NextAuth, { getServerSession } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { db } from '@/db'

export const config = {
  adapter: PrismaAdapter(db),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // 24 hours
    }),
  ],
}

const handler = NextAuth(config)

function getSession() {
  return getServerSession(config)
}

export {
  handler as GET,
  handler as POST,
  getSession,
}
