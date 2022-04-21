import * as Express from 'express';

import { GetBiomesList } from './GetBiomesList';
import { appleGet, applesGet } from './apples';
import { orangesGet } from './oranges';

export const initRoutes = (app: Express.Application) => {
	app.get('/apple/:id', appleGet);
	app.get('/apples', applesGet);
	app.get('/oranges', orangesGet);
	app.get('/biomes-list', GetBiomesList)
}