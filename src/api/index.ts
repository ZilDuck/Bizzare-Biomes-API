import axios, { Axios } from 'axios'
import console from 'console'
import { createCipheriv } from 'crypto'
import {
    apiKey,
    apiEndpoint
} from '../helpers/env-variables'

import {
  fromBech32Address,
} from "@zilliqa-js/crypto";

const base = apiEndpoint

const getNFT = async (contract:string, id:string|number) => {
  
  try {
    const { data, status } = await axios.get(
      `${base}/nft/${contract}/${id}`,
      {
        headers: {
          'X-API-KEY': "cd66db4a-cfc8-4db3-951c-b9c633566196" // pull this value through .env
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

async function getNFTsForAddress(address: string, page:number, size:number) {
  type UserNFTs = {
    contract:string,
    zrc6:boolean,
    tokenIds:number[]
  }
  
  type GetUserNFTs = {
    data: UserNFTs[]
  }
  
  try {
    console.log(`${base}/address/${address}/nft`)
    const { data, status } = await axios.get(
      `${base}/address/${address}/nft`,
      {
        headers: {
          'X-API-KEY': "cd66db4a-cfc8-4db3-951c-b9c633566196"
        }
      }
    )

    

    let allNFTs = []
    let count = 0

    for (let x of data) {
      for (let id of x.tokenIds) {
        count++
        if(count > (page - 1) * size && count <= page * size) allNFTs.push(getNFT(x.contract, id))
      }
    }

    const pagination = {
      page,
      size,
      total_pages: Math.ceil(count / size),
      total_elements: count
    }
    const paginatedNFTs = await Promise.all(allNFTs)
    return {
      pagination,
      ownedNFTs: paginatedNFTs
    } 
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

