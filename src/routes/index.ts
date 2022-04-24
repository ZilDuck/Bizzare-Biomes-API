import * as Express from 'express';

import { GetBiomesList } from './GetBiomesList';
import { GetTokensForUser } from './GetTokensForUser'

export const initRoutes = (app: Express.Application) => {
	app.get('/biome', GetBiomesList)
	app.get('/address/:user', GetTokensForUser)
}
