import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import { getMintedBiomes } from '../helpers/biomes-helpers'

export const GetBiomeByID = async (req: Request, res: Response, next: NextFunction) => {
    console.log('get biome')
    const id = req.params.id

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
        const mintedBiomes = await getMintedBiomes()
        console.log(mintedBiomes)
        const biome = mintedBiomes?.find((x:any) => parseInt(x.id) == parseInt(id))?.data
        console.log(id, biome)
        res.status(200).json(biome)
    }
}
  