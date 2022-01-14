import { useEffect, useState } from "react";

function PokemonCard({name, src, hp, attack, defence}) {
 
  return (
    <section className="pokemon__card">
      <h2>NAME:{name}</h2>
      <img src={src} alt={name} />
      <section className="pokemon__stats">
        <p>HP={hp}</p>
        <p>ATTACK={attack}</p>
        <p>DEFENSE={defence}</p>
      </section>
    </section>
  );
}

export default PokemonCard;
