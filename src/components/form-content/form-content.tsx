export interface FormContentProps {
  children: React.ReactNode
}

export function FormContent({ children }: FormContentProps) {
  return <div className="w-full max-w-2xl mx-auto p-6 md:p-8">{children}</div>
}
