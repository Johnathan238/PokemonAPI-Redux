import axios from 'axios'

export const GET_API = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=10'
})