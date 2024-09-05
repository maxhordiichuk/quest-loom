import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'

import Providers from '@/app/providers'
import { Navbar } from '@/components/server/navbar'

const fontSans = FontSans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Quest Loom',
  description: 'Quest Loom is a platform to create and manage quests.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
