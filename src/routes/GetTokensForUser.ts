import { NextFunction, Request, Response } from 'express'
import { API } from '../api'

export const GetTokensForUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = await API.getNFTsForAddress(req.params.user)
    res.status(200).json(data)
}
