import { useEffect, useState } from "react";

function PokemonCard({ name, src, strength, abilities }) {
  return (
    <section className="pokemon__card">
      <h2>NAME:{name}</h2>
      <img src={src} alt={name} />
      <section className="pokemon__stats">
        <p>STRENGTH={strength}</p>
        <ul>
          {abilities.map((item) => {
            return <li key={item.ability.name}>{item.ability.name}</li>;
          })}
        </ul>
      </section>
    </section>
  );
}

export default PokemonCard;
