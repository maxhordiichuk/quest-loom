'use client'

import { useForm } from 'react-hook-form'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import paths from '@/lib/paths'
import { createQuestSchema } from '@/schema'
import { setErrors } from '@/lib/forms'
import type { CreateQuestSchemaType } from '@/schema'
import type { Quest } from '@/types/models/creator'
import type { createQuest } from '@/lib/client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { FormAlert } from '@/components/form-alert'
import { ImageField } from '@/components/image-field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { saveQuestLabel, savingQuestLabel } from './lib'

export interface QuestFormProps {
  quest?: Quest
  onSubmit: typeof createQuest
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
    const result = await onSubmit({ ...form.getValues() })

    if (result.errors) {
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

        <div>
          <Button type="submit" className="px-8" loading={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? savingQuestLabel : saveQuestLabel}
          </Button>
        </div>
      </form>
    </Form>
  )
}
