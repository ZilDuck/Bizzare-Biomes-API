import { NextFunction, Request, Response } from 'express'
import { getMintedBiomes } from '../helpers/biomes-helpers'
import { ReturnBiomeCSSData } from './GetAllBiomesCSS'

export const GetBiomesByAttribute = async (req: Request, res: Response, next: NextFunction) => {
    console.log('get biome')
    const biomeName = req.params.biome
    const biomeSearch = await ReturnBiomeCSSData().find((x: { sitePath: string }) => x.sitePath == biomeName)

    try {
      const mintedBiomes = await getMintedBiomes()
      console.log(mintedBiomes?.length)
      const resultingBiomes = mintedBiomes?.filter((x:any) => x.data['attributes'][0].value.toLowerCase() == biomeSearch?.name.toLowerCase())
      // console.log(JSON.stringify(resultingBiomes, null, 2))
      console.log(resultingBiomes?.length)
      res.status(200).json(resultingBiomes)
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  