import getConfig from 'next/config'
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const { serverRuntimeConfig: config } = getConfig()

const uploadExpirationTime = 600 // 10 minutes
const maxFileSize = 10485760 // 10 MB
const fileUrlExpirationTime = 600 // 10 minutes

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

export function getFileUrl(key: string) {
  const command = new GetObjectCommand({ Bucket: config.aws.bucketName, Key: key })

  return getSignedUrl(s3Client, command, { expiresIn: fileUrlExpirationTime })
}

export function getObject(key: string) {
  const command = new GetObjectCommand({ Bucket: config.aws.bucketName, Key: key })

  return s3Client.send(command)
}
