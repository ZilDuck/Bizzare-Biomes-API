import * as Express from 'express';

import { GetBiomesList } from './GetBiomesList';

export const initRoutes = (app: Express.Application) => {
	app.get('/biomes-list', GetBiomesList)
}