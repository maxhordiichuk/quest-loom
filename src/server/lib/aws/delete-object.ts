import getConfig from 'next/config'
import { DeleteObjectCommand, S3Client } from '@aws-sdk/client-s3'

const { serverRuntimeConfig: config } = getConfig()

const s3Client = new S3Client({})

export function deleteObject(key: string) {
  return s3Client.send(
    new DeleteObjectCommand({
      Bucket: config.aws.bucketName,
      Key: key,
    })
  )
}
