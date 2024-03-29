import * as Express from 'express'
import { GetBiomeByID } from './GetBiomeByID'
import { GetAllBiomesCSS } from './GetAllBiomesCSS'
import { GetBiomesByStreet } from './GetBiomesByStreet'
import { GetHeldNFTsForBase16 } from './GetHeldNFTsForBase16'
import {GetBiomesHeldByAddress} from './GetBiomesHeldByAddress'
import { GetRecentlyMintedBiomes } from './GetRecentlyMintedBiomes'
import { GetAllStreets } from './GetAllStreets' 
import { GetMintData } from './GetMintData'



export const initRoutes = (app: Express.Application) => {
	// get all the biomes CSS details
	app.get('/biome/data', GetAllBiomesCSS)

	// get a single biome                
	app.get('/biome/:id', GetBiomeByID)                  

	// get all the biomes which a user has
	app.get('/biomes/recent', GetRecentlyMintedBiomes)

	// get all the biomes which a user has
	app.get('/biomes/:address', GetBiomesHeldByAddress)

	// get all of the unique street names 
	app.get('/street/:streetName', GetBiomesByStreet)

	// get all the biomes on a street
	app.get('/street', GetAllStreets)
	
	// get all the NFTs which a biome/user has 
	app.get('/address/:base16', GetHeldNFTsForBase16)

	// get all the NFTs which a biome/user has 
	app.get('/mintdata', GetMintData)
}
