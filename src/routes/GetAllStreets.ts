import { NextFunction, Request, Response } from 'express'
import { API } from '../api'


export type worldLevelBiome = {
    streetName:string
  }
  
  const streetList: Array<worldLevelBiome> = [
      {
            streetName: 'Aurora'
      },
      {
            streetName: 'Fuck you'
      }
    ]
  
    export const GetAllStreets = async (req: Request, res: Response, next: NextFunction) => {
      console.log(`GetBiomesCSS ${JSON.stringify(streetList)}`)
      res.status(200).json(streetList)
  }
  