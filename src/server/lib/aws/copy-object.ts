import getConfig from 'next/config'
import { CopyObjectCommand, S3Client } from '@aws-sdk/client-s3'

const { serverRuntimeConfig: config } = getConfig()

const s3Client = new S3Client({})

export function copyObject(fromKey: string, toKey: string) {
  return s3Client.send(
    new CopyObjectCommand({
      Bucket: config.aws.bucketName,
      CopySource: `${config.aws.bucketName}/${fromKey}`,
      Key: toKey,
    })
  )
}
