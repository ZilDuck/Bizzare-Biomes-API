require('dotenv').config()


export const zilliqaRpcUrl: string =
  process.env.ZILLIQA_RPC_URL || 'https://api.zilliqa.com/'

export const zilliqaWsUrl: string =
  process.env.ZILLIQA_WS_URL || 'wss://api-ws.zilliqa.com'

export const chainId: number = Number(process.env.CHAIN_ID) || 333

export const nftContract: string =
    process.env.NFT_CONTRACT || ''

export const proxyContract: string = 
    process.env.PROXY_CONTRACT || ''

export const apiKey: any =
    process.env["X-API-KEY"]

export const apiEndpoint: string = 'https://api.zildexr.com'

