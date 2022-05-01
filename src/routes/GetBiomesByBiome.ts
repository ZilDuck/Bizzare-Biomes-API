import { NextFunction, Request, Response } from 'express'
import { getMintedBiomes } from '../helpers/biomes-helpers'
import { GetBiomesList } from './GetBiomesList'

export const GetBiomesByBiome = async (req: Request, res: Response, next: NextFunction) => {
    console.log('get biome')
    const biomeName = req.params.biome
    const biomeSearch = GetBiomesList().find(x => x.sitePath == biomeName)

    try {
      const mintedBiomes = await getMintedBiomes()

      const resultingBiomes = mintedBiomes?.filter((x:any) => x.data['attributes'][0].value == biomeSearch?.name)

      res.status(200).json(resultingBiomes)
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  