'use client'

import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import paths from '@/lib/paths'
import { CreateQuestSchemaType, createQuestSchema } from '@/schema'
import { setErrors } from '@/lib/forms'
import type { CreateQuestAction, UpdateQuestAction } from '@/types/requests'
import type { Quest } from '@/types/models/creator'

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

import { saveQuestLabel } from './lib'

export interface QuestFormProps {
  quest?: Quest
  onSubmit: CreateQuestAction | UpdateQuestAction
}

export function QuestForm({ quest, onSubmit }: QuestFormProps) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<CreateQuestSchemaType>({
    resolver: zodResolver(createQuestSchema),
    defaultValues: {
      title: quest?.title || '',
      description: quest?.description || '',
    },
  })

  const handleSubmit = form.handleSubmit(async () => {
    const result = await onSubmit({ ...form.getValues(), id: quest?.id as string })

    if (!result.success) {
      setErrors(form, result.errors)
      return
    }

    router.push(paths.questShow(result.questId))
  })

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
        <FormAlert message={form.formState.errors.root?.message} />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter quest title" {...field} />
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
                <Textarea placeholder="Enter quest description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ImageField form={form} name="imageKey" image={quest?.image} />

        <div className="grid justify-end">
          <Button type="submit" className="px-8" loading={form.formState.isSubmitting}>
            {saveQuestLabel}
          </Button>
        </div>
      </form>
    </Form>
  )
}
