import '@/styles/globals.css'
import { Inter as FontSans } from 'next/font/google'
import type { Metadata } from 'next'

import { cn } from '@/lib/utils'

import Providers from '@/app/providers'
import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Quest Loom',
  description: 'Quest Loom is a platform to create and manage quests.',
  robots: {
    index: false,
    follow: false,
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        url: '/safari-pinned-tab.svg',
      },
    ],
    apple: {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  },
  other: {
    'msapplication-TileColor': '#f9c515',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}
