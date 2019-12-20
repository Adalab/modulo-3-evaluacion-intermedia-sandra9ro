import React from "react";
import Pokemon from "./Pokemon";

function PokeList(props) {
  console.log(props);
  console.log("me traigo: ", props.pokemons);
  return (
    <li>
      <img src={props.pokemons.url} alt="" />
      <h2>{props.pokemons.name}</h2>
      <Pokemon />
      <ul></ul>
    </li>
  );
}

export default PokeList;
