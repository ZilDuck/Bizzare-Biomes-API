
import * as BodyParser from 'body-parser'
import Express from 'express'
import cors from 'cors'
import { settings } from './settings'
import { initRoutes } from './routes/index'

export class Server {
	public app: Express.Application
	public router!: Express.Router

	constructor() {
		this.app = Express()
		this.setConfig()
		this.setRoutes()
	}

	public start() {
		this.app.listen(settings.PORT)
		console.log(`Server started at ${settings.PORT}`)
	}

	private setConfig() {
		this.app.use('/', Express.static(settings.PUBLIC_PATH))
		this.app.use(BodyParser.json())
		this.app.use(this.handleErrors)
		this.app.use(cors())
	}

	private setRoutes() {
		initRoutes(this.app)
	}

	private handleErrors (err:Error, req:Express.Request, res:Express.Response, next:Express.NextFunction) {
		console.log('ERROR')
		console.error(err.stack)
		next(err)
	}
}