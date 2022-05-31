import { NextFunction, Request, Response } from 'express'
import { API } from '../api'

export const GetTokensForUser = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`GetTokensForUser ${req.params.user}`)
    
    let size = parseInt(String(req.query.size))
    let page = parseInt(String(req.query.page))

    if (req.query) {
        size = parseInt(String(req.query.size))
        page = parseInt(String(req.query.page))
    }

    let data = await API.getNFTsForAddress(req.params.user, page, size)

    
    res.status(200).json(data)
}
