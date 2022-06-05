const { Zilliqa } = require('@zilliqa-js/zilliqa')
const { MessageType } = require('@zilliqa-js/subscriptions')

// mainnet or testnet
const network = process.env.NETWORK || 'mainnet'

const nfd_contract = {
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
  return 3000
}

const getAllTokenHolders = async () => {
  try {
      const result = (await zilliqa.blockchain.getSmartContractSubState(
          '0x8ab2af0cccee7195a7c16030fbdfde6501d91903', // TEMP CODED TO NFD CONTRACT FOR TESTING
          "token_owners"
      )).result.token_owners
  
      const arrayResult = Object.entries(result).map((x:any) => ({ id: x[0], address: x[1] }))
      return arrayResult
  } catch (err) {
    console.error("There was an error trying to get all Token holders: ", err)
  }
}

const getATokenHolders = async (id: string) => {
  try {
      const result = (await zilliqa.blockchain.getSmartContractSubState(
          '0x8ab2af0cccee7195a7c16030fbdfde6501d91903', // TEMP CODED TO NFD CONTRACT FOR TESTING
          "token_owners",
          [id]
      )).result.token_owners
      console.log(`getATokenHolders - ${JSON.stringify(result)}`)
  
      const arrayResult = Object.entries(result).map((x:any) => ({ id: x[0], address: x[1] }))
      return arrayResult
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