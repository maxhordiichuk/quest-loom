'use client'

import { ChangeEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { QuestImage } from '@/components/quest-image'
import { Textarea } from '@/components/ui/textarea'

import { saveQuestLabel } from './lib/labels'
import { useImageUpload } from './lib'

export interface QuestFormProps {
  quest?: {
    title: string
    description: string
    imageUrl: string
    code: string
  }
}

export function QuestForm({ quest }: QuestFormProps) {
  const [title, setTitle] = useState(quest?.title || '')
  const [description, setDescription] = useState(quest?.description || '')
  const [code, setCode] = useState(quest?.code || '')
  const { imageUrl, uploadImage, uploadError } = useImageUpload(quest?.imageUrl || '')

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
    <div className="w-full max-w-2xl mx-auto p-6 md:p-8">
      <form className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter quest title"
            value={title}
            onChange={handleTitleChange}
          />
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
        </div>

        <div>
          <div className="grid gap-2">
            <Label htmlFor="image">Image</Label>
            <div className="flex items-center gap-2">
              <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
            </div>
          </div>

          {uploadError && <p className="text-red-500">{uploadError}</p>}

          {imageUrl && <QuestImage src={imageUrl} alt="Uploaded image" className="mt-2 w-full" />}
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
          {saveQuestLabel}
        </Button>
      </form>
    </div>
  )
}
