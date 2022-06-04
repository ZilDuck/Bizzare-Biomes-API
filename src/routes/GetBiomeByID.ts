import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import { getABiome } from '../helpers/biomes-helpers'

export const GetBiomeByID = async (req: Request, res: Response, next: NextFunction) => {
    console.log('get biome')
    const id = req.params.id

    try {
        if (id === 'metadata.json') {
            try {
                const filePath = '../metadata/metadata.json'
                const data = fs.readFileSync(filePath)
                res.status(200).json(data)
            } catch (err: any) {
                err.type = 'not-found'
                err.message = 'Collection metadata does not exist'
                next(err)
            }
        } else {
            const data = await getABiome(id)
            console.log(`fuck you ${JSON.stringify(data)}`)
            res.status(200).json(data)
        }
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  