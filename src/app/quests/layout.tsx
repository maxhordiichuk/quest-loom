import { Navbar } from '@/components/server/navbar'

export default function QuestsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
