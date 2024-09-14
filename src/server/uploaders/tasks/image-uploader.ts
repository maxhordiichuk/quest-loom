import type { Task } from '@prisma/client'

import { db } from '@/server/db'

import { BaseUploader } from '../base-uploader'

export class TaskImageUploader extends BaseUploader<Task> {
  get currentKey() {
    return this.entity.imageKey
  }

  getKey(filename: string) {
    return `Task/${this.entity.id}/image/${filename}`
  }

  async updateEntity(imageKey: string | null) {
    return db.task.update({
      where: { id: this.entity.id },
      data: { imageKey },
    })
  }
}
