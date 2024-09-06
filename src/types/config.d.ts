declare module 'next/config' {
  type ConfigTypes = () => {
    serverRuntimeConfig: {
      aws: {
        bucketName: string
        region: string
      }
      mailer: {
        server: string
        from: string
        tokenMaxAge: number
      }
    }
    publicRuntimeConfig: {
      host: string
    }
  }

  declare const getConfig: ConfigTypes

  export default getConfig
}
