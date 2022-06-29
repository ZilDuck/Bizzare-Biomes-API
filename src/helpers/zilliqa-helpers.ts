import {toBech32Address} from "@zilliqa-js/zilliqa";

const { Zilliqa } = require('@zilliqa-js/zilliqa')
const { MessageType } = require('@zilliqa-js/subscriptions')
require('dotenv').config()

// mainnet or testnet
const network = process.env.NETWORK || 'mainnet'

const biome_contract = {
    mainnet: process.env.MAINNET_CONTRACT,
    testnet: process.env.TESTNET_CONTRACT 
}[network]

const zil_api = {
    mainnet: 'https://api.zilliqa.com',
    testnet: 'https://dev-api.zilliqa.com'
}[network]

const zil_ws = {
    mainnet: 'wss://api-ws.zilliqa.com',
    testnet: 'wss://dev-ws.zilliqa.com'
}[network]

const zilliqa = new Zilliqa(zil_api)

const getMintedCount = async () => {
  try {
    const result = (await zilliqa.blockchain.getSmartContractSubState(
        biome_contract, 
        "token_id_count"
    )).result.token_id_count

    return result
  } catch (err) {
    console.error("There was an error trying to get the minted count: ", err)
  }
}

const getAllTokenHolders = async () => {
  try {
      const result = (await zilliqa.blockchain.getSmartContractSubState(
          biome_contract, // TEMP CODED TO NFD CONTRACT FOR TESTING
          "token_owners"
      )).result.token_owners
  
      return Object.entries(result).map((x:any) => ({
          id: x[0],
          base16: x[1],
          bech32: toBech32Address(x[1]),
      }))
  } catch (err) {
    console.error("There was an error trying to get all Token holders: ", err)
  }
}

const getATokenHolders = async (id: string) => {
  try {
      const result = (await zilliqa.blockchain.getSmartContractSubState(
          biome_contract,
          "token_owners",
          [id]
      )).result.token_owners
      console.log(`getATokenHolders - ${JSON.stringify(result)}`)
  
      return Object.entries(result).map((x:any) => ({ id: x[0], address: x[1] }))
  } catch (err) {
    console.log(`fuckmeintherror`)
    console.log(err)
  }
}


export {
  getMintedCount,
  getAllTokenHolders,
  getATokenHolders
}