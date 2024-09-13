'use client'

import { ChangeEvent, useEffect } from 'react'
import { useFormState } from 'react-dom'

import { createTask, updateTask } from '@/actions'
import type { Task } from '@/types/models/creator'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { TaskImage } from '@/components/client/task-image'
import { Textarea } from '@/components/ui/textarea'
import { useImageUpload } from '@/hooks/use-image-upload'

import { saveTaskLabel } from './lib/labels'

export interface TaskFormProps {
  task?: Task
  questId?: string
  formAction: typeof createTask | typeof updateTask
  onSuccess?: () => void
}

export function TaskForm({ task, questId, formAction, onSuccess }: TaskFormProps) {
  const [formState, taskFormAction] = useFormState(formAction, { errors: {} })
  const { image, uploadImage, uploadError } = useImageUpload(task?.image)

  useEffect(() => {
    if (!formState) {
      onSuccess?.()
    }
  }, [formState, onSuccess])

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files) {
      uploadImage(files[0])
    }
  }

  if (!formState) {
    return null
  }

  return (
    <form action={taskFormAction} className="grid gap-6">
      {task && <input type="hidden" name="id" value={task.id} />}
      {questId && <input type="hidden" name="questId" value={questId} />}

      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Enter task title"
          defaultValue={task?.title || ''}
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
          placeholder="Enter task description"
          defaultValue={task?.description || ''}
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

        {image?.key && <input type="hidden" name="imageKey" value={image.key} />}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="code">Code</Label>
        <Input
          id="code"
          name="code"
          placeholder="Enter task code"
          className="font-mono"
          defaultValue={task?.code || ''}
        />
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
