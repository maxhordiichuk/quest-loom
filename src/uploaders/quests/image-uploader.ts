import type { Quest } from '@prisma/client'

import { BaseUploader } from '@/uploaders/base-uploader'
import { db } from '@/db'

export class QuestImageUploader extends BaseUploader<Quest> {
  get currentKey() {
    return this.entity.imageKey
  }

  getKey(filename: string) {
    return `Quest/${this.entity.id}/image/${filename}`
  }

  async updateEntity(imageKey: string | null) {
    return db.quest.update({
      where: { id: this.entity.id },
      data: { imageKey },
    })
  }
}
