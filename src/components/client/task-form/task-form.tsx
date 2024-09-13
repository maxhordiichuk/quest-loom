import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { CreateTaskSchemaType, createTaskSchema } from '@/schema'
import { setErrors } from '@/lib/forms'
import type { CreateTaskAction, UpdateTaskAction } from '@/types/requests'
import type { Task } from '@/types/models/creator'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FormAlert } from '@/components/client/form-alert'
import { ImageField } from '@/components/client/image-field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { saveTaskLabel } from './lib'

export interface TaskFormProps {
  task?: Task
  questId?: string
  onSubmit: CreateTaskAction | UpdateTaskAction
  onSuccess: () => void
}

export function TaskForm({ task, questId, onSubmit, onSuccess }: TaskFormProps) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<CreateTaskSchemaType>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      questId,
      title: task?.title || '',
      description: task?.description || '',
      code: task?.code || '',
    },
  })

  const handleSubmit = form.handleSubmit(async () => {
    const result = await onSubmit({ ...form.getValues(), id: task?.id as string })

    if (!result.success) {
      setErrors(form, result.errors)
      return
    }

    router.refresh()
    onSuccess()
  })

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
        <FormAlert message={form.formState.errors.root?.message} />

        <FormField name="questId" render={({ field }) => <input type="hidden" {...field} />} />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter task title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter task description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter unlock code" className="font-mono" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ImageField form={form} name="imageKey" image={task?.image} />

        <div className="grid justify-end">
          <Button type="submit" className="px-8" loading={form.formState.isSubmitting}>
            {saveTaskLabel}
          </Button>
        </div>
      </form>
    </Form>
  )
}
