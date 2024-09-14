import { db } from '@/server/db'
import { deleteObject } from '@/server/lib/aws'

export async function deleteImage(key: string) {
  return Promise.all([deleteObject(key), db.attachment.delete({ where: { key } })])
}
