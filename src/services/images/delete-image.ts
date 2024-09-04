import { db } from '@/db'
import { deleteObject } from '@/lib/aws'

export async function deleteImage(key: string) {
  return Promise.all([deleteObject(key), db.attachment.delete({ where: { key } })])
}
