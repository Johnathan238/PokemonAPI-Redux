# PokemonAPI-Redux

*Description* 
All the Pokemon lovers can browse and check out their favorite Pokemon abilities, stats, type, and much more with the help of React & Redux.

### Goals

- Understand Redux and querying an API

<br>

## Code Showcase
```
export const GetPokemonList = (page) => async dispatch => {
    try {
    dispatch({
        type: "POKEMON_LIST_LOADING"
    });

    const perPage = 15;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

    dispatch({
        type: "POKEMON_LIST_SUCCESS",
        payload: res.data
    })
    } catch (e) {
    dispatch({
        type: "POKEMON_LIST_FAIL",
        })
    }
};

export const GetPokemon = (pokemon) => async dispatch => {
    try {
        dispatch({
        type: "POKEMON_MULTIPLE_LOADING"
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    dispatch({
        type: "POKEMON_MULTIPLE_SUCCESS",
        payload: res.data,
        pokemonName: pokemon
    })
  } catch (e) {
    dispatch({
        type: "POKEMON_MULTIPLE_FAIL",
    })
    }
}
```
## Resources
https://redux.js.org/tutorials/essentials/part-1-overview-concepts

https://stackoverflow.com/questions/50584641/invariant-violation-you-should-not-use-switch-outside-a-router
