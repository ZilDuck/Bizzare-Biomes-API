import * as Express from 'express'
import { GetBiomeByID } from './GetBiomeByID'
import { GetBiomesCSS } from './GetBiomesCSS'
import { GetBiomesByStreet } from './GetBiomesByStreet'
import { GetHeldNFTsForBase16 } from './GetHeldNFTsForBase16'
import { GetBiomesHeldByBase16 } from './GetBiomesHeldByBase16'

export const initRoutes = (app: Express.Application) => {
	app.get('/biome/data', GetBiomesCSS)                 // get all the biomes
	app.get('/biome/:id', GetBiomeByID)              // get a single biome
	app.get('/biomes/:base16', GetBiomesHeldByBase16)    // get all the biomes which a user has

	app.get('/street/:streetName', GetBiomesByStreet)  // get all the biomes on a street
	app.get('/address/:base16', GetHeldNFTsForBase16)// get all the NFTs which a biome/user has 

}
