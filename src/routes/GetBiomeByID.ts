import { NextFunction, Request, Response } from 'express'
import fs from 'fs'

export const GetBiomeByID = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    if (id === 'metadata.json') {
        try {
            const filePath = '../metadata/metadata.json'
            const data = fs.readFileSync(filePath)
            res.status(200).json(data)
        } catch (err: any) {
            err.type = 'not-found'
            err.message = 'Collection metadata does not exist'
            next(err)
        }
    } else {
        /** 
        const mintedBiomes = await getMinted()
        const biome = mintedBiomes.find(x => x.id === id).data
        */
    }
}
  