'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { useFormState } from 'react-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useImageUpload } from '@/hooks/use-image-upload'
import type { Quest } from '@/db/types'
import type { createQuest } from '@/actions'

import { saveTaskLabel } from './lib/labels'

export interface QuestFormProps {
  quest?: Quest
  formAction: typeof createQuest
}

export function QuestForm({ quest, formAction }: QuestFormProps) {
  const [formState, questFormAction] = useFormState(formAction, { errors: {} })
  const [title, setTitle] = useState(quest?.title || '')
  const [description, setDescription] = useState(quest?.description || '')
  const { image: cover, uploadImage, uploadError } = useImageUpload(quest?.cover)

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files) {
      uploadImage(files[0])
    }
  }

  return (
    <form action={questFormAction} className="grid gap-6">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter quest title"
          value={title}
          onChange={handleTitleChange}
        />
        {formState.errors.title && (
          <p className="text-red-500">{formState.errors.title.join(', ')}</p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Enter quest description"
          value={description}
          onChange={handleDescriptionChange}
        />
        {formState.errors.description && (
          <p className="text-red-500">{formState.errors.description.join(', ')}</p>
        )}
      </div>

      <div>
        <div className="grid gap-2">
          <Label htmlFor="image">Image</Label>
          <div className="flex items-center gap-2">
            <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        </div>

        {uploadError && <p className="text-red-500">{uploadError}</p>}

        {cover && (
          <Image
            src={cover.url}
            className="mt-2 w-full aspect-[3/2] overflow-hidden rounded-xl object-cover object-center"
            alt="Uploaded image"
            width={cover.width}
            height={cover.height}
          />
        )}

        {cover && <input type="hidden" name="coverKey" value={cover.key} />}
      </div>

      {formState.errors._form && (
        <div className="rounded p-2 bg-red-200 border border-red-400">
          {formState.errors._form.join(', ')}
        </div>
      )}

      <Button type="submit" className="justify-center">
        {saveTaskLabel}
      </Button>
    </form>
  )
}
