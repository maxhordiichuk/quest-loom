import getConfig from 'next/config'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'

const { serverRuntimeConfig: config } = getConfig()

const s3Client = new S3Client({})

export function getObject(key: string) {
  return s3Client.send(
    new GetObjectCommand({
      Bucket: config.aws.bucketName,
      Key: key,
    })
  )
}
