import { NextFunction, Request, Response } from 'express'
import { API } from '../api'

export type worldLevelBiome = {
  name:string,
  houseNumber: number,
  sitePath:string,
  imagePath:string,
  bottomColour?:string,
  topColour?:string
}

const biomesList: Array<worldLevelBiome> = [
    {
        name: 'Aurora Borealis',
        houseNumber: 0,
        sitePath: 'auora-borealis',
        imagePath: '/assets/backgrounds/Aurora borealis.png',
        bottomColour: '#00383e',
        topColour: '#00383e'
    },
    {
        name: 'Big clouds',
        houseNumber: 0,
        sitePath: 'big-clouds',
        imagePath: '/assets/backgrounds/Big clouds.png',
        bottomColour: '#00383e',
        topColour: '#9cdaf2'
    },
    {
        name: 'Chemtrails',
        houseNumber: 0,
        sitePath: 'chemtrails',
        imagePath: '/assets/backgrounds/Chemtrails.png',
        bottomColour: '#00383e',
        topColour: '#24c8c5'
    },
    {
        name: 'Comet sky',
        houseNumber: 0,
        sitePath: 'comet-sky',
        imagePath: '/assets/backgrounds/Comet sky.png',
        bottomColour: '#00383e',
        topColour: '#48597e'
    },
    {
        name: 'Dark Moon',
        houseNumber: 0,
        sitePath: 'dark-moon',
        imagePath: '/assets/backgrounds/Dark moon.png',
        bottomColour: '#00383e',
        topColour: '#9b243e'
    },
    {
        name: 'Desert sky',
        houseNumber: 0,
        sitePath: 'desert-sky',
        imagePath: '/assets/backgrounds/Desert sky.png',
        bottomColour: '#00383e',
        topColour: '#f5e7df'
    },
    {
        name: 'Eclipse',
        houseNumber: 0,
        sitePath: 'eclipse',
        imagePath: '/assets/backgrounds/Eclipse.png',
        bottomColour: '#00383e',
        topColour: '#180F2F'
    },
    {
        name: 'Floating islands',
        houseNumber: 0,
        sitePath: 'floating-islands',
        imagePath: '/assets/backgrounds/Floating islands.png',
        bottomColour: '#00383e',
        topColour: '#fdc3cb'
    },
    {
        name: 'Great wave',
        houseNumber: 0,
        sitePath: 'great-wave',
        imagePath: '/assets/backgrounds/Great wave.png',
        bottomColour: '#00383e',
        topColour: '#8bc7d6'
    },
    {
        name: 'Islands sky',
        houseNumber: 0,
        sitePath: 'islands-sky',
        imagePath: '/assets/backgrounds/Islands sky.png',
        bottomColour: '#00383e',
        topColour: '#edffff'
    },
    {
        name: 'Japanese pagoda',
        houseNumber: 0,
        sitePath: 'japanese-pagoda',
        imagePath: '/assets/backgrounds/Japanese pagoda.png',
        bottomColour: '#00383e',
        topColour: '#d1ecfa'
    },
    {
        name: 'Mountain sky',
        houseNumber: 0,
        sitePath: 'mountains-sky',
        imagePath: '/assets/backgrounds/Mountains sky.png',
        bottomColour: '#00383e',
        topColour: '#fff0e3'
    },
    {
        name: 'Night sky',
        houseNumber: 0,
        sitePath: 'night-sky',
        imagePath: '/assets/backgrounds/Night sky.png',
        bottomColour: '#00383e',
        topColour: '#447197'
    },
    {
        name: 'Pine forest',
        houseNumber: 0,
        sitePath: 'pine-forest',
        imagePath: '/assets/backgrounds/Pine forest.png',
        bottomColour: '#00383e',
        topColour: '#3477b7'
    },
    {
        name: 'Planets',
        houseNumber: 0,
        sitePath: 'planets',
        imagePath: '/assets/backgrounds/Planets.png',
        bottomColour: '#00383e',
        topColour: '#f06b8d'
    },
    {
        name: 'Rainbow sky',
        houseNumber: 0,
        sitePath: 'rainbow-sky',
        imagePath: '/assets/backgrounds/Rainbow sky.png',
        bottomColour: '#00383e',
        topColour: '#cceef7'
    },
    {
        name: 'Sky serpent',
        houseNumber: 0,
        sitePath: 'sky-serpent',
        imagePath: '/assets/backgrounds/Sky serpent.png',
        bottomColour: '#00383e',
        topColour: '#afb8bd'
    },
    {
        name: 'Space station',
        houseNumber: 0,
        sitePath: 'space-station',
        imagePath: '/assets/backgrounds/Space station.png',
        bottomColour: '00383e',
        topColour: '#050827'
    },
    {
        name: 'Spiky ridge',
        houseNumber: 0,
        sitePath: 'spiky-ridge',
        imagePath: '/assets/backgrounds/Spiky ridge.png',
        bottomColour: '#00383e',
        topColour: '#fcb698'
    },
    {
        name: 'Sunny sky',
        sitePath: 'sunny-sky',
        houseNumber: 0,
        imagePath: '/assets/backgrounds/Sunny sky.png',
        bottomColour: '#00383e',
        topColour: '#90ebd0'
    },
    {
        name: 'Sunset sky',
        sitePath: 'sunset-sky',
        houseNumber: 0,
        imagePath: '/assets/backgrounds/Sunset sky.png',
        bottomColour: '#00383e',
        topColour: '#FFAE49'
    },
    {
        name: 'Volcano sky',
        houseNumber: 0,
        sitePath: 'volcano-sky',
        imagePath: '/assets/backgrounds/Volcano sky.png',
        bottomColour: '#00383e',
        topColour: '#ab9892'
    }
  ]

  export const ReturnBiomeCSSData = function()
  {
      return biomesList
  }

  export const GetAllBiomesCSS = async (req: Request, res: Response, next: NextFunction) => {
    console.log(`GetBiomesCSS ${JSON.stringify(biomesList)}`)
    res.status(200).json(biomesList)
}
