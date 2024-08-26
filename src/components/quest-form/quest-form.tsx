'use client'

import { ChangeEvent, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import Image from 'next/image'
import { saveQuestLabel } from './lib/labels'

export interface QuestFormProps {
  quest?: {
    title: string
    description: string
    imageURL: string
    code: string
  }
}

export function QuestForm({ quest }: QuestFormProps) {
  const [title, setTitle] = useState(quest?.title || '')
  const [description, setDescription] = useState(quest?.description || '')
  const [imageURL] = useState(quest?.imageURL || '')
  const [code, setCode] = useState(quest?.code || '')

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
    const file = event.target.files?.[0]

    if (file) {
      // eslint-disable-next-line no-console
      console.log(file)
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

          {imageURL && (
            <div className="mt-2">
              <Image src={imageURL} alt="Uploaded image" width={400} height={300} />
            </div>
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
          {saveQuestLabel}
        </Button>
      </form>
    </div>
  )
}
