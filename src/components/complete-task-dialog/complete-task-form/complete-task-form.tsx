import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { CompleteTaskSchemaType, completeTaskSchema } from '@/schema'
import { setErrors } from '@/lib/forms'
import type { CompleteTaskAction } from '@/types/requests'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { FormAlert } from '@/components/form-alert'
import { Input } from '@/components/ui/input'

import { completeTaskLabel } from '../lib'

export interface CompleteTaskFormProps {
  assignmentId: string
  completeTask: CompleteTaskAction
  onSuccess: () => void
}

export function CompleteTaskForm({ assignmentId, completeTask, onSuccess }: CompleteTaskFormProps) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<CompleteTaskSchemaType>({
    resolver: zodResolver(completeTaskSchema),
    defaultValues: { assignmentId, code: '' },
  })

  const handleSubmit = form.handleSubmit(async () => {
    const result = await completeTask(form.getValues())

    if (result.errors) {
      setErrors(form, result.errors)
      return
    }

    onSuccess()
    router.refresh()
  })

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
        <FormAlert message={form.formState.errors.root?.message} />

        <FormField name="assignmentId" render={({ field }) => <input type="hidden" {...field} />} />

        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="12345678" className="font-mono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid justify-end">
          <Button type="submit" className="px-8" loading={form.formState.isSubmitting}>
            {completeTaskLabel}
          </Button>
        </div>
      </form>
    </Form>
  )
}
