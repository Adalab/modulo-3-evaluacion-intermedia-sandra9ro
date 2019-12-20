import React from "react";
import Pokemon from "./Pokemon";

function PokeList(props) {
  console.log("me traigo: ", props.state);
  return (
    <ul>
      <li>
        <img src="" alt="" />
        <h2></h2>
        <ul>
          <Pokemon />
        </ul>
      </li>
    </ul>
  );
}

export default PokeList;
