import { getMintedCount, getAllTokenHolders, getATokenHolders } from "./zilliqa-helpers"
import { toBech32Address } from "@zilliqa-js/zilliqa";
import { orderBy } from "lodash";
import { match } from "assert";

interface Resource {
  uri: string;
  mime_type: string;
}
interface Attribute {
  display_type: string;
  trait_type: string;
  value: string;
}

let allBiomes: { id: string; data: Object }[] = []
let allBiomesFormatted: { streetName: string; houseNumber: number; data: {id: string; data: { name: string; resources: Array<Resource>; attributes: Array<Attribute> }}}[] = []
let sortedResult: { streetName: string; houseNumber: number; data: {id: string; data: { name: string; resources: Array<Resource>; attributes: Array<Attribute> }}}[] = []
const metadataDir = '../../metadata/metadata/'



const loadBiomesOnStart = () => {
    for (let id = 1; id <= 3000; id++) {
      try {
        const filePath = `${metadataDir}${String(id).padStart(4, '0')}.json`
        const data =  require(filePath)
        console.log({ id: String(id).padStart(4, '0'), data: data })

        const streetName = data.name.replace(/\d+/g, '').substring(1, data.name.length);
        const houseNumber = parseInt(data.name.match(/\d+/)[0], 10)
        allBiomesFormatted.push({ streetName: streetName, houseNumber: houseNumber, data: { id: String(id).padStart(4, '0'), data: data } })

        allBiomes.push({ id: String(id).padStart(4, '0'), data: data })
      } catch (err) {
        console.log(err)
      }
    }
}
loadBiomesOnStart()


const getStreetNames = async (streetName: string) => {
  const holders = await getAllTokenHolders()

   const result = allBiomesFormatted.filter(x => x.streetName.toLowerCase() == streetName.toLowerCase()).map(x => {
    let base16 = holders!.find(y => parseInt(y.id) == parseInt(x.data.id))!.address
    let bech32 = toBech32Address(base16)
    return {
      base16,
      bech32,
      ...x
    }
  })

  sortedResult = orderBy(result, [(b) => b.houseNumber], "asc")  

  console.log(`getStreetNames - ${JSON.stringify(result, null, 2)}`)
  return JSON.parse(JSON.stringify(sortedResult))
}


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

      console.log(`getMintedBiomes - ${matchedOwners}`)
      return matchedOwners
  } catch (err) {
      console.log(err)
  }
}

const getABiome = async (id: string) => {
  try {
      const paddedID = id.padStart(4, '0')
      const nonPaddedID = paddedID.replace(/^0+/, '');
      const holder = await getATokenHolders(nonPaddedID)
    
      console.log(`querying for ${parseInt(nonPaddedID)} got ${holder}`)

    
        let base16 = holder!.find(y => parseInt(y.id) == parseInt(nonPaddedID))!.address
        let bech32 = toBech32Address(base16)

        const filePath = `${metadataDir}${String(paddedID)}.json`
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
  getStreetNames,
  getMintedBiomes,
  getABiome
}
