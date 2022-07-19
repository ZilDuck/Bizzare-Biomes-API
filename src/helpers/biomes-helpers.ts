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
interface Biome {
  streetName: string;
  houseNumber: number;
  id: string;
  name: string;
  resources: Array<Resource>;
  attributes: Array<Attribute>;
}
interface ProjectMetadata {
  name: string;
  description: string;
  external_url: string;
  animation_url: string;
  collection_image_url: string;
  discord: string;
}

let allStreets = new Set<String>();
let sortedResult = new Array<Biome>();
let allBiomesFormatted = new Array<Biome>();

let metadataDir = '../../metadata/metadata/'
let projectMetadataDir = '../../metadata/metadata.json'
let projectMetadata = new Set<ProjectMetadata>();


const loadBiomesOnStart = () => {
    for (let id = 1; id <= 3000; id++) {
      try 
      {
        var filePath = `${metadataDir}${String(id).padStart(4, '0')}.json`
        const data =  require(filePath)

        const streetName = data.name.replace(/\d+/g, '').substring(1, data.name.length);
        allStreets.add(streetName);
        
        const houseNumber = parseInt(data.name.match(/\d+/)[0], 10)
        allBiomesFormatted.push(
        { 
          streetName: streetName, 
          houseNumber: houseNumber, 
          id: String(id).padStart(4, '0'), 
          ...data 
        })
      } 
      catch (err) 
      {
        console.log(err)
      }
    }
    //add the metadata file too 
    try 
    {
      var filePath = `${projectMetadataDir}`
      projectMetadata = require(filePath)    
    } 
    catch (err) 
    {
      console.log(err)
    }
}
loadBiomesOnStart()


const getStreetNames = async () => {
  return [...allStreets];
}

const getProjectLevelMetadata = async () => {
  return projectMetadata;
}

const getBiomesByStreetName = async (streetName: string) => {
  const result = allBiomesFormatted.filter(
    biome => biome.streetName.toLocaleLowerCase() == streetName.toLocaleLowerCase()
  )
  return result
}

const getOwnedBiomesByStreetName = async (streetName: string) => {
  const biomesByStreetName = await getBiomesByStreetName(streetName)
  const holders = await getAllTokenHolders()
  // console.log("Holders: %j", holders)

  const ownedBiomes = biomesByStreetName.filter(
    biome => holders?.find(holder => parseInt(holder.id) == parseInt(biome.id))
  )

  const result = ownedBiomes.map(
    biome => {
      let base16 = holders!.find(holder => parseInt(holder.id) == parseInt(biome.id))!.base16
      let bech32 = toBech32Address(base16)
      return { base16, bech32, ...biome }
  })

  sortedResult = orderBy(result, [(biome) => biome.houseNumber], "asc")
  return sortedResult
}


const getMintedBiomes = async () => {
  try {
      const currentID = await getMintedCount()
      const holders = await getAllTokenHolders()
      
      const mintedBiomes = allBiomesFormatted.filter(biome => parseInt(biome.id) <= currentID)
      const ownedBiomes = mintedBiomes.filter(
        biome => holders?.find(holder => parseInt(holder.id) == parseInt(biome.id))
      )

      return ownedBiomes.map(
        biome => {
          let base16 = holders!.find(holder => parseInt(holder.id) == parseInt(biome.id))!.base16
          let bech32 = holders!.find(holder => parseInt(holder.id) == parseInt(biome.id))!.bech32
          return { base16, bech32, ...biome }
        })
  } catch (err) {
      console.log(err)
  }
}

const getABiome = async (id: string) => {
  try {
      const paddedID = id.padStart(4, '0')
      const nonPaddedID = paddedID.replace(/^0+/, '');
      const holder = await getATokenHolders(nonPaddedID)
    
      console.log("Querying for %s got %j", nonPaddedID, holder)
      const biome = allBiomesFormatted.filter(biome => biome.id == paddedID)[0]

      let base16 = holder!.find(holder => parseInt(holder.id) == parseInt(nonPaddedID))!.address
      let bech32 = toBech32Address(base16)
      
      return {
          base16,
          bech32,
          ...biome
      }

  } catch (err) {
      console.log(err)
  }
}

export {
  getProjectLevelMetadata,
  getStreetNames,
  getBiomesByStreetName,
  getOwnedBiomesByStreetName,
  getMintedBiomes,
  getABiome
}
