import React from "react";
import apiData from "./api/apiData.json";

// import { render } from "@testing-library/react";
import PokeList from "./PokeList.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: apiData,
    };
  }

  render() {
    return (
      <div className="main-container">
        <h1 className="main-title">Mi lista de Pokemon</h1>
        <ul className="main-list">
          <PokeList className="cards" pokemons={this.state.pokemons} />
        </ul>
      </div>
    );
  }
}

export default App;
