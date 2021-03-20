import { GET_API } from '../API/API'

export const getPokemon = () => async dispatch => {
    const res = await GET_API.get('')

    dispatch({
        type: 'GET_POKEMON'
        payload: res.data
    })
}