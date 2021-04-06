import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../Actions/Action'


export default function TopPokemon() {
    const pok = useSelector( state => state.topPokemon )
    const results = useSelector( state => state.results )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemon(pok))
    },[])

    const renderTopPokemon = () => {
        return pok.map(pok => {
            <li key={pok.results.data} className="list">
                <img src={pok.sprites.front_default} />
                <img src={pok.sprites.back_default} />
                <li>{pok.ability.name}</li>
            </li>
        })
    }

    return (



        <div>
            <h3>Pokemon's</h3>
            <ul>{pok && renderTopPokemon()}</ul>
        </div>

    )
}