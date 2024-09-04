import { Task } from '@prisma/client'

import { BaseUploader } from '@/uploaders/base-uploader'
import { db } from '@/db'

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
