import React from "react";
import apiData from "./api/apiData.json";

// import { render } from "@testing-library/react";
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
    return (
      <div>
        <h1>Mi lista de Pokemon</h1>
        <ul>
          <PokeList pokemons={this.state.pokemons} />
        </ul>
      </div>
    );
  }
}

export default App;
