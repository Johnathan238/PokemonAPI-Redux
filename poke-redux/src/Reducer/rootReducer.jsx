import {combineReducers} from "redux";
import PokemonList from "./PokemonList";
import PokemonMultipleReducer from "./PokemonMultipleReducer";

export const rootReducer = combineReducers({
    PokemonList: PokemonList,
    Pokemon: PokemonMultipleReducer
})

export default rootReducer;