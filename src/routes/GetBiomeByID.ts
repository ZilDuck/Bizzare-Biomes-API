import { NextFunction, Request, Response } from 'express'
import fs from 'fs'
import { getABiome, getProjectLevelMetadata } from '../helpers/biomes-helpers'

import metadata from "../../metadata/metadata.json"

export const GetBiomeByID = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id

    try {
        if (id === 'metadata.json') {
            try {
                const projectLevelMetadata = await getProjectLevelMetadata()
                res.status(200).json(projectLevelMetadata)
            } catch (err: any) {
                err.type = 'not-found'
                err.message = err
                err.status = 404
                next(err)
            }
        } else {
            const data = await getABiome(id)
            console.log("Biome data: %j", data)
            res.status(200).json(data)
        }
    } catch (err) {
        console.log(err)
        next(err)
    } 
}
  