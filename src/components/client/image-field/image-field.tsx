import Image from 'next/image'
import { ChangeEvent } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'

import { useImageUpload } from '@/hooks/use-image-upload'
import type { Image as ImageType } from '@/types/models/common'

import { FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

export interface ImageFieldProps<T extends FieldValues> {
  form: UseFormReturn<T>
  name: Path<T>
  image?: ImageType | null
}

export function ImageField<T extends FieldValues>({
  form,
  name,
  image: initialImage,
}: ImageFieldProps<T>) {
  const { image, uploadImage } = useImageUpload(initialImage)

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) {
      return
    }

    const result = await uploadImage(files[0])

    if (result.error) {
      form.setError(name, { message: result.error })
      return
    }

    form.setValue(name, result.image!.key as T[typeof name])
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Image</FormLabel>
          <Input id="image" type="file" accept="image/*" onChange={handleImageChange} />
          {field.value && <input type="hidden" {...field} />}
          <FormMessage />

          {image && (
            <Image
              src={image.url}
              className="mt-2 w-full aspect-[3/2] overflow-hidden rounded-xl object-cover object-center"
              alt="Uploaded image"
              width={image.width}
              height={image.height}
            />
          )}
        </FormItem>
      )}
    />
  )
}
