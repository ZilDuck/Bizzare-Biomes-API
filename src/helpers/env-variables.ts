require('dotenv').config()

export const chainId: number = Number(process.env.CHAIN_ID) || 333


export const proxyContract: string = 
    process.env.PROXY_CONTRACT || ''

export const apiKey: any =
    process.env["X-API-KEY"]

export const apiEndpoint: string = 'https://api.zildexr.com'

