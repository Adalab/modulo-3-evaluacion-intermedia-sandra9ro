import React from "react";
import Pokemon from "./Pokemon";

function PokeList(props) {
  return props.pokemons.map(item => {
    return (
      <li className="card" key={item.id}>
        <img
          className="poke-img"
          src={item.url}
          alt={`Imagen de ${item.name}`}
          title={`Imagen de ${item.name}`}
        />
        <h3 className="poke-name">{item.name}</h3>
        <ul className="type-container">
          <Pokemon element={item.types} />
        </ul>
      </li>
    );
  });
}

export default PokeList;
