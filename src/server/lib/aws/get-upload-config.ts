import getConfig from 'next/config'
import { S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'

const { serverRuntimeConfig: config } = getConfig()

const uploadExpirationTime = 600 // 10 minutes
const maxFileSize = 10485760 // 10 MB

const s3Client = new S3Client({})

interface UploadConfigProps {
  key: string
  contentType: string
  userId: string
  dimensions: {
    width: number
    height: number
  }
}

export function getUploadConfig({ key, contentType, userId, dimensions }: UploadConfigProps) {
  return createPresignedPost(s3Client, {
    Bucket: config.aws.bucketName,
    Key: key,
    Conditions: [
      ['content-length-range', 0, maxFileSize],
      ['starts-with', '$Content-Type', 'image/'],
      ['eq', '$x-amz-meta-userid', userId],
      ['eq', '$x-amz-meta-width', dimensions.width.toString()],
      ['eq', '$x-amz-meta-height', dimensions.height.toString()],
    ],
    Fields: {
      'Content-Type': contentType,
      'x-amz-meta-userid': userId,
      'x-amz-meta-width': dimensions.width.toString(),
      'x-amz-meta-height': dimensions.height.toString(),
    },
    Expires: uploadExpirationTime,
  })
}
