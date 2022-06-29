import { NextFunction, Request, Response } from 'express'
import { getMintedBiomes } from '../helpers/biomes-helpers'

export const GetBiomesHeldByAddress = async (req: Request, res: Response, next: NextFunction) => {
    const address = req.params.address.toLowerCase()
    console.log("get holder ", address)

    try {
      const mintedBiomes = await getMintedBiomes()
      console.log(mintedBiomes)
      const resultingBiomes = mintedBiomes?.filter((x:any) => (x.bech16 == address || x.bech32 == address))

      console.log(`GetBiomesHeldByAddress - ${resultingBiomes}`)
      res.status(200).json(resultingBiomes)
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  