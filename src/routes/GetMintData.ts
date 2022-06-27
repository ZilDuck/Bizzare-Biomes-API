import { NextFunction, Request, Response } from 'express'
import { API } from '../api'
import { getMintedCount } from '../helpers/zilliqa-helpers'

export const GetMintData = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`GetMintData`)

    const mintDataResponse = await getMintedCount()
    console.log(`GetMintData - ${mintDataResponse}`)
    res.status(200).json(mintDataResponse)
}