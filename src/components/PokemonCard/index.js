import React from "react";

function PokemonCard({ name, image, hp, attack, defence }) {
  return (
    <section className="pokemon__card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <section className="pokemon__stats">
        <p>{hp}</p>
        <p>{attack}</p>
        <p>{defence}</p>
      </section>
    </section>
  );
}

export default PokemonCard;
