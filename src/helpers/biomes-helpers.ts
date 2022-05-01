import { getMintedCount, getTokenHolders } from "./zilliqa-helpers"
import fs from 'fs'
import { toBech32Address } from "@zilliqa-js/zilliqa";

let allBiomes: { id: number; data: Buffer }[] = []
const metadataDir = '../../metadata/metadata/'

const loadBiomesOnStart = () => {
    for (let id = 1; id <= 49; id++) {
        const filePath = `${metadataDir}${id}.json`
        const data =  require(filePath)

        allBiomes.push({ id: id, data: data })
    }
}
loadBiomesOnStart()



const getMintedBiomes = async () => {
  try {
      const currentID = await getMintedCount()
      const holders = await getTokenHolders()
      
      const ducksMinted = allBiomes.filter(x => x.id <= currentID)
      
      const matchedOwners = ducksMinted.map(x => {
        let base16 = holders!.find(y => parseInt(y.id) == x.id)!.address
        let bech32 = toBech32Address(base16)
        return {
          base16,
          bech32,
          ...x
        }
      })

      console.log(matchedOwners)
      return matchedOwners
  } catch (err) {
      console.log(err)
  }
}

export {
  getMintedBiomes
}