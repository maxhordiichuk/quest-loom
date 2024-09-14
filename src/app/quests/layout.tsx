import { Navbar } from '@/server/components/navbar'

export default function QuestsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
