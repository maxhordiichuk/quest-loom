import type { Quest } from '@prisma/client'

import { db } from '@/db'
import { deleteImage } from '@/services/images/delete-image'

export function deleteQuest(quest: Quest) {
  return Promise.all([
    db.quest.delete({ where: { id: quest.id } }),
    quest.imageKey && deleteImage(quest.imageKey),
  ])
}
