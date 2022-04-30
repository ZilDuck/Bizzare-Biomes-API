import * as Express from 'express'
import { GetBiomeByID } from './GetBiomeByID'
import { GetBiomesList } from './GetBiomesList'
import { GetTokensForUser } from './GetTokensForUser'

export const initRoutes = (app: Express.Application) => {
	app.get('/biome', GetBiomesList)
	app.get('/biome/:id', GetBiomeByID)
	app.get('/address/:user', GetTokensForUser)
}
