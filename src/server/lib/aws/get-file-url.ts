import getConfig from 'next/config'

const { serverRuntimeConfig: config } = getConfig()

export function getFileUrl(key: string) {
  return `https://${config.aws.bucketName}.s3.us-east-1.amazonaws.com/${key}`
}
