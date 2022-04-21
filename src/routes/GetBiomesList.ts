import { Request, Response } from 'express'

export type worldLevelBiome = {
  name:string,
  sitePath:string,
  imagePath:string
}

const biomesList: Array<worldLevelBiome> = [
  {
      name: 'Aurora',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Aurora borealis sky.png'
  },
  {
      name: 'Big clouds',
      sitePath: 'Big clouds',
      imagePath: '/assets/backgrounds/Big clouds.png'
  },
  {
      name: 'Cityscape',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/City scape WIP.png'
  },
  {
      name: 'Comet sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Comet sky.png'
  },
  {
      name: 'Desert sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Desert sky.png'
  },
  {
      name: 'Floating islands',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Floating islands WIP.png'
  },
  {
      name: 'Great wave',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Great wave.png'
  },
  {
      name: 'Islands sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Islands sky.png'
  },
  {
      name: 'Japanese pagoda',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Japanese pagoda.png'
  },
  {
      name: 'Mountain sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Mountains sky.png'
  },
  {
      name: 'Night sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Night sky.png'
  },
  {
      name: 'Pine forest',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Pine forest.png'
  },
  {
      name: 'Rainbow sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Rainbow sky.png'
  },
  {
      name: 'Sky serpent',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Sky serpent.png'
  },
  {
      name: 'Spiky ridge',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Spiky ridge.png'
  },
  {
      name: 'Sunny sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Sunny sky.png'
  },
  {
      name: 'Sunny sky two',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Sunset sky WIP 2.png'
  },
  {
      name: 'Volcano sky',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Volcano sky fixed.png'
  },
  {
      name: 'Dark moon',
      sitePath: 'aurora',
      imagePath: '/assets/backgrounds/Zelda moon.png'
  }
]


export const GetBiomesList = (req: Request, res: Response) => {
  res.send(biomesList)
}
