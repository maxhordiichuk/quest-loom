import { Navbar } from '@/server/components/navbar'

export default function TasksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
