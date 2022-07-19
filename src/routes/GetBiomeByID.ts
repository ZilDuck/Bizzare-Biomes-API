import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import { getABiome, getProjectLevelMetadata } from '../helpers/biomes-helpers'

export const GetBiomeByID = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    try {
        if (id === 'metadata.json') {
            try {
                const projectLevelMetadata = await getProjectLevelMetadata()
                res.status(200).json(projectLevelMetadata)
            } catch (err: any) {
                next(err)
            }
        } else {
            const data = await getABiome(id)
            res.status(200).json(data)
        }
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  