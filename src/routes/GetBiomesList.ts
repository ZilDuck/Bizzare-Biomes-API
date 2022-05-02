export type worldLevelBiome = {
  name:string,
  sitePath:string,
  imagePath:string,
  bottomColour?:string,
  topColour?:string
}

const biomesList: Array<worldLevelBiome> = [
    {
        name: 'Aurora',
        sitePath: 'aurora',
        imagePath: '/assets/backgrounds/Aurora borealis sky.png',
        bottomColour: '#00383e',
        topColour: '#00383e'
    },
    {
        name: 'Big clouds',
        sitePath: 'big-clouds',
        imagePath: '/assets/backgrounds/Big clouds.png',
        bottomColour: '#e6f1f2',
        topColour: '#9cdaf2'
    },
    {
        name: 'Cityscape',
        sitePath: 'cityscape',
        imagePath: '/assets/backgrounds/City scape WIP.png',
        bottomColour: '#ea976d',
        topColour: '#84bcc2'
    },
    {
        name: 'Comet sky',
        sitePath: 'comet-sky',
        imagePath: '/assets/backgrounds/Comet sky.png',
        bottomColour: '#00383e',
        topColour: '#48597e'
    },
    {
        name: 'Desert sky',
        sitePath: 'desert-sky',
        imagePath: '/assets/backgrounds/Desert sky.png',
        bottomColour: '#00383e',
        topColour: '#f5e7df'
    },
    {
        name: 'Floating islands',
        sitePath: 'floating-islands',
        imagePath: '/assets/backgrounds/Floating islands WIP.png',
        bottomColour: '#00383e',
        topColour: '#fdc3cb'
    },
    {
        name: 'Great wave',
        sitePath: 'great-wave',
        imagePath: '/assets/backgrounds/Great wave.png',
        bottomColour: '#00383e',
        topColour: '#8bc7d6'
    },
    {
        name: 'Islands sky',
        sitePath: 'islands-sky',
        imagePath: '/assets/backgrounds/Islands sky.png',
        bottomColour: '#00383e',
        topColour: '#edffff'
    },
    {
        name: 'Japanese pagoda',
        sitePath: 'japanese-pagoda',
        imagePath: '/assets/backgrounds/Japanese pagoda.png',
        bottomColour: '#00383e',
        topColour: '#d1ecfa'
    },
    {
        name: 'Mountain sky',
        sitePath: 'mountains-sky',
        imagePath: '/assets/backgrounds/Mountains sky.png',
        bottomColour: '#00383e',
        topColour: '#fff0e3'
    },
    {
        name: 'Night sky',
        sitePath: 'night-sky',
        imagePath: '/assets/backgrounds/Night sky.png',
        bottomColour: '#00383e',
        topColour: '#447197'
    },
    {
        name: 'Pine forest',
        sitePath: 'pine-forest',
        imagePath: '/assets/backgrounds/Pine forest.png',
        bottomColour: '#50cf7d',
        topColour: '#3477b7'
    },
    {
        name: 'Rainbow sky',
        sitePath: 'rainbow-sky',
        imagePath: '/assets/backgrounds/Rainbow sky.png',
        bottomColour: '#00383e',
        topColour: '#cceef7'
    },
    {
        name: 'Sky serpent',
        sitePath: 'sky-serpent',
        imagePath: '/assets/backgrounds/Sky serpent.png',
        bottomColour: '#00383e',
        topColour: '#afb8bd'
    },
    {
        name: 'Spiky ridge',
        sitePath: 'spiky-ridge',
        imagePath: '/assets/backgrounds/Spiky ridge.png',
        bottomColour: '#00383e',
        topColour: '#fcb698'
    },
    {
        name: 'Sunny sky',
        sitePath: 'sunny-sky',
        imagePath: '/assets/backgrounds/Sunny sky.png',
        bottomColour: '#00383e',
        topColour: '#90ebd0'
    },
    {
        name: 'Sunny sky two',
        sitePath: 'sunset-sky',
        imagePath: '/assets/backgrounds/Sunset sky WIP 2.png',
        bottomColour: '#00383e',
        topColour: '#ffae4a'
    },
    {
        name: 'Volcano sky',
        sitePath: 'volcano-sky',
        imagePath: '/assets/backgrounds/Volcano sky fixed.png',
        bottomColour: '#00383e',
        topColour: '#ab9892'
    },
    {
        name: 'Dark moon',
        sitePath: 'dark-moon',
        imagePath: '/assets/backgrounds/Zelda moon.png',
        bottomColour: '#00383e',
        topColour: '#99233e'
    }
  ]

export const GetBiomesList = () => {
  return biomesList
}
