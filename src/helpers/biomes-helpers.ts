import { getMintedCount, getAllTokenHolders, getATokenHolders } from "./zilliqa-helpers"
import { toBech32Address } from "@zilliqa-js/zilliqa";

let allBiomes: { id: string; data: Buffer }[] = []
const metadataDir = '../../metadata/metadata/'

const loadBiomesOnStart = () => {
    for (let id = 1; id <= 3000; id++) {
      try {
        const filePath = `${metadataDir}${String(id).padStart(4, '0')}.json`
        const data =  require(filePath)
        console.log({ id: String(id).padStart(4, '0'), data: data })

        allBiomes.push({ id: String(id).padStart(4, '0'), data: data })
      } catch (err) {
        console.log(err)
      }
    }
}
loadBiomesOnStart()

const getMintedBiomes = async () => {
  try {
      const currentID = await getMintedCount()
      const holders = await getAllTokenHolders()
      
      const ducksMinted = allBiomes.filter(x => parseInt(x.id) <= currentID)
      
      const matchedOwners = ducksMinted.map(x => {
        let base16 = holders!.find(y => parseInt(y.id) == parseInt(x.id))!.address
        let bech32 = toBech32Address(base16)
        return {
          base16,
          bech32,
          ...x
        }
      })

      
      return matchedOwners
  } catch (err) {
      console.log(err)
  }
}

const getABiome = async (id: string) => {
  try {

      const holder = await getATokenHolders(id)
    
      console.log(`querying for ${parseInt(id)} got ${holder}`)

    
        let base16 = holder!.find(y => parseInt(y.id) == parseInt(id))!.address
        let bech32 = toBech32Address(base16)

        const filePath = `${metadataDir}${String(id).padStart(4, '0')}.json`
        const data =  require(filePath)
        console.log(allBiomes)
        return {
          base16,
          bech32,
          data
        }

  } catch (err) {
      console.log(err)
  }
}

export {
  getMintedBiomes,
  getABiome
}
