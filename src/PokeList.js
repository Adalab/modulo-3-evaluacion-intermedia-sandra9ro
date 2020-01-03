import React from "react";
import Pokemon from "./Pokemon";

function PokeList(props) {
  return props.pokemons.map(item => {
    return (
      <li key={item.id}>
        <h3>{item.name}</h3>
        <img
          src={item.url}
          alt={`Imagen de ${item.name}`}
          title={`Imagen de ${item.name}`}
        />
        <ol>
          <Pokemon element={item.types} />
        </ol>
      </li>
    );
  });
}

export default PokeList;
