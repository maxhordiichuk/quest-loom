import path from 'node:path'
import { v1 as uuidv1 } from 'uuid'

export function generateTempKey(originalFilename: string) {
  const extension = path.extname(originalFilename)
  const filename = path.basename(originalFilename, extension)

  return `temp/${filename}-${uuidv1()}${extension}`
}
