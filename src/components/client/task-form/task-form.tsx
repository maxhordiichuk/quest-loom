'use client'

import { ChangeEvent, useState } from 'react'
import { useFormState } from 'react-dom'

import { createTask } from '@/actions'
import type { Task } from '@/db/types'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TaskImage } from '@/components/client/task-image'
import { Textarea } from '@/components/ui/textarea'
import { useImageUpload } from '@/hooks/use-image-upload'

import { saveTaskLabel } from './lib/labels'

export interface TaskFormProps {
  task?: Task
  formAction: typeof createTask
}

export function TaskForm({ task, formAction }: TaskFormProps) {
  const [formState, questFormAction] = useFormState(formAction, { errors: {} })
  const [title, setTitle] = useState(task?.title || '')
  const [description, setDescription] = useState(task?.description || '')
  const [code, setCode] = useState(task?.code || '')
  const { image, uploadImage, uploadError } = useImageUpload(task?.image)

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value)
  }

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value)
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

        {image && (
          <TaskImage
            src={image.url}
            width={image.width}
            height={image.height}
            alt="Uploaded image"
            className="mt-2 w-full"
          />
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="code">Code</Label>
        <Input
          id="code"
          placeholder="Enter quest code"
          className="font-mono"
          value={code}
          onChange={handleCodeChange}
        />
      </div>

      <Button type="submit" className="justify-center">
        {saveTaskLabel}
      </Button>
    </form>
  )
}
