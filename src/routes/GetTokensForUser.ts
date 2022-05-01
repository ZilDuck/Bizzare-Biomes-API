import { NextFunction, Request, Response } from 'express'
import { API } from '../api'

export const GetTokensForUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.params.user)
    const data = await API.getNFTsForAddress(req.params.user)
    res.status(200).json(data)
}
