import { NextFunction, Request, Response } from 'express'
import { API } from '../api'

export const GetHeldNFTsForBase16 = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`GetTokensForUser ${req.params.base16}`)
    
    let size = parseInt(String(req.query.size))
    let page = parseInt(String(req.query.page))

    if (req.query) {
        size = parseInt(String(req.query.size))
        page = parseInt(String(req.query.page))
    }
    console.log(`GetTokensForUser ${req.query.size}/${req.query.page}/${req.params.base16}`)
    let data = await API.getNFTsForAddress(req.params.base16, page, size)

    
    res.status(200).json(data)
}
