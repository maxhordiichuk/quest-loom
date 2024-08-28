import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const s3Client = new S3Client({})
const uploadExpirationTime = 600 // 10 minutes
const maxFileSize = 10485760 // 10 MB
const fileUrlExpirationTime = 600 // 10 minutes

export const getUploadConfig = (key: string, contentType: string) => {
  return createPresignedPost(s3Client, {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: key,
    Conditions: [
      ['content-length-range', 0, maxFileSize],
      ['starts-with', '$Content-Type', 'image/'],
    ],
    Fields: {
      'Content-Type': contentType,
    },
    Expires: uploadExpirationTime,
  })
}

export const getFileUrl = (key: string) => {
  const command = new GetObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME!, Key: key })

  return getSignedUrl(s3Client, command, { expiresIn: fileUrlExpirationTime })
}
