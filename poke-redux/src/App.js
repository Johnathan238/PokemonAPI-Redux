import React from 'react'
import TopPokemon from './Components/Pokemon'
import {Switch, Route, NavLink, Redirect} from "react-router-dom"
import PokemonList from "./Components/PokemonList"
import Pokemon from "./Components/Pokemon"
import './App.css';

function App() {
  return (
    // <div className="APP">
    //   {/* <h1>I CHOOSE YOU !!!</h1>
    //   <TopPokemon /> */}
    //         {/* <nav>
    //   <NavLink to={"/"}>Search</NavLink>
    //   </nav> */}
    //   <Switch>
    //     <Route path={"/"} exact component={PokemonList} />
    //     <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
    //     <Redirect to={"/"} />
    //   </Switch>
    // </div>
      <div className="APP">
      <nav>
        <NavLink to={"/"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:pokemon"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
