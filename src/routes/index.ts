import * as Express from 'express'
import { GetBiomeByID } from './GetBiomeByID'
import { GetBiomesByBiome } from './GetBiomesByBiome'
import { GetBiomesList } from './GetBiomesList'
import { GetStreetBiomes } from './GetStreetBiomes'
import { GetTokensForUser } from './GetTokensForUser'
import { GetBiomesByHolder } from './GetBiomesByHolder'

export const initRoutes = (app: Express.Application) => {
	app.get('/biome', GetBiomesList)
	app.get('/street/:streetName', GetStreetBiomes)
	app.get('/biome/:id', GetBiomeByID)
	app.get('/address/:user', GetTokensForUser)
	app.get('/biomes/:biome', GetBiomesByBiome)
	app.get('/biomes/holder/:holder', GetBiomesByHolder)

}
