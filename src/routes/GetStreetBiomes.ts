import { NextFunction, Request, Response } from 'express'
import { API } from '../api'
import { getStreetNames } from '../helpers/biomes-helpers'

export const GetStreetBiomes = async (req: Request, res: Response, next: NextFunction) => {
    const streetName = req.params.streetName
    console.log(`GetStreetBiomes ${req.params.streetName}`)
    const data = await getStreetNames(streetName)
    res.status(200).json(data)
}