import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../Actions/Action'


export default function TopPokemon() {
    const pok = useSelector( state => state.topPokemon )
    const re = useSelector( state => state.re )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemon(pok))
    },[])

    const renderTopPokemon = () => {
        
    }
}