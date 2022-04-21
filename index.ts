import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

import { getBiomesList } from './biomes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.get('/biome/:id', (req: Request, res: Response) => {
  res.status(200).json({ id: req.params.id})
})

app.get('/biome-list', (req: Request, res: Response) => {
  res.status(200).json(getBiomesList())
})

app.listen(port, () => {
  console.log(`⚡️[project-ponds-api]: Server is running at http://localhost:${port}`);
})
