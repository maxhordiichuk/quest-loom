import { Navbar } from '@/components/server/navbar'

export default function TasksLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
