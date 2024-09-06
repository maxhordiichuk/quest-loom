;['HOST', 'AWS_BUCKET_NAME', 'AWS_REGION', 'EMAIL_SERVER', 'EMAIL_FROM'].forEach(key => {
  if (!process.env[key]) {
    throw new Error(`Please set ${key} in environment variables`)
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    aws: {
      bucketName: process.env.AWS_BUCKET_NAME,
      region: process.env.AWS_REGION,
    },
    mailer: {
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      tokenMaxAge: 24 * 60 * 60, // 24 hours
    },
  },
  publicRuntimeConfig: {
    host: process.env.HOST,
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'quest-loom-dev.s3.us-east-1.amazonaws.com',
      port: '',
      pathname: '/**'
    }]
  },
  experimental: {
    serverComponentsExternalPackages: ['@aws-sdk'],
  },
};

export default nextConfig;
