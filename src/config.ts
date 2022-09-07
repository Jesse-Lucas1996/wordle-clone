import * as dotnev from 'dotenv'

let loaded = false
export function loadEnv() {
  if (!loaded) {
    dotnev.config()
    loaded = true
  }
}

export function getEnvVariable<T extends any = string>(variable: string): T {
  if (!loaded) {
    loadEnv()
  }
  const v = process.env[variable] as T
  if (v === undefined) {
    throw console.error(`Environment variable ${variable} has not been defined`)
  }
  return v
}

export type Config = {
  tokenSecret: string,
  apiKey: string
}

export const config: Readonly<Config> = {
    tokenSecret: getEnvVariable('TOKEN_SECRET'),
    apiKey: getEnvVariable('API_KEY')
}