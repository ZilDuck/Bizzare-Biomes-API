import { NextFunction, Request, Response } from 'express'
import { getStreetNames } from '../helpers/biomes-helpers'

export const GetAllStreets = async (req: Request, res: Response, next: NextFunction) => {
      const streetNames = await getStreetNames();
      res.status(200).json(streetNames)
}
  