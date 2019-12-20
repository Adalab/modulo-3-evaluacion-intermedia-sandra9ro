import React from "react";
import apiData from "./api/apiData.json";

import { render } from "@testing-library/react";
import PokeList from "./PokeList.js";
// import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: apiData,
    };
  }

  render() {
    console.log("en render de App:", this.state.pokemons);
    return (
      <div>
        <div>
          <h1>Mi lista de Pokemon</h1>
          <ul>
            <PokeList>
              {this.state.pokemons.map(() => {
                return <p>hola pokes</p>;
              })}
            </PokeList>
          </ul>
        </div>
        <h1>Lista</h1>
        <ul>
          <li>
            <img src="" alt="" />
            <h2>nombre pokemon</h2>
            <ul>
              <li>propiedad del pokemon</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
