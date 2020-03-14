import React from "react";

function Pokemon(props) {
  return props.element.map((index, i) => {
    return (
      <li key={index} className="poke-type">
        {props.element[i]}
      </li>
    );
  });
}

export default Pokemon;
