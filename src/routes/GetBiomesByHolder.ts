import { NextFunction, Request, Response } from 'express'
import { getMintedBiomes } from '../helpers/biomes-helpers'

export const GetBiomesByHolder = async (req: Request, res: Response, next: NextFunction) => {
    console.log('get holder')
    const holder = req.params.holder.toLowerCase()

    try {
      const mintedBiomes = await getMintedBiomes()
      const resultingBiomes = mintedBiomes?.filter((x:any) => x.owner == holder)
      console.log(resultingBiomes)
      res.status(200).json(resultingBiomes)
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  