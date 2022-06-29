import { NextFunction, Request, Response } from 'express'
import { getMintedBiomes } from '../helpers/biomes-helpers'

export const GetRecentlyMintedBiomes = async (req: Request, res: Response, next: NextFunction) => {
    console.log('GetRecentlyMintedBiomes')

    try {
        const mintedBiomes = await getMintedBiomes()
        console.log(mintedBiomes?.length)
        res.status(200).json(mintedBiomes?.slice(-4).reverse())
    } catch (err) {
        console.log(err)
        next(err)
    }
}
