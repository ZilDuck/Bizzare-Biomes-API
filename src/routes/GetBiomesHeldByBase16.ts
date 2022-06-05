import { NextFunction, Request, Response } from 'express'
import { getMintedBiomes } from '../helpers/biomes-helpers'

export const GetBiomesHeldByBase16 = async (req: Request, res: Response, next: NextFunction) => {
    console.log('get holder')
    const base16 = req.params.base16.toLowerCase()
    
    try {
      const mintedBiomes = await getMintedBiomes()
      const resultingBiomes = mintedBiomes?.filter((x:any) => x.base16 == base16)
      console.log(`GetBiomesHeldByBase16 - ${resultingBiomes}`)
      res.status(200).json(resultingBiomes)
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  