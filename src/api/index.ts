import axios, { Axios } from 'axios'
import console from 'console'
import { createCipheriv } from 'crypto'
import {
    apiKey,
    apiEndpoint
} from '../helpers/env-variables'


const base = apiEndpoint

const getNFT = async (contract:string, id:string|number) => {
  
  try {
    const { data, status } = await axios.get(
      `${base}/nft/${contract}/${id}`,
      {
        headers: {
          'X-API-KEY': apiKey
        }
      }
    )

 
    
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

async function getNFTsForAddress(address: string) {
  type UserNFTs = {
    contract:string,
    zrc6:boolean,
    tokenIds:number[]
  }
  
  type GetUserNFTs = {
    data: UserNFTs[]
  }
  
  try {
    const { data, status } = await axios.get(
      `${base}/address/${address}/nft`,
      {
        headers: {
          'X-API-KEY': apiKey
        }
      }
    )

    console.log(data)
    let allNFTs = []
    for (let x of data) {
      for (let id of x.tokenIds) {
        allNFTs.push(getNFT(x.contract, id))
      }
    }
    
    //console.log(JSON.stringify(test, null, 2))

    return await Promise.all(allNFTs)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export const API = {
  getNFTsForAddress
}

