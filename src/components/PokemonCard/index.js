import { useEffect, useState } from "react"
import "./Pokemoncard.css"

function PokemonCard({ name, src, strength, abilities })
{
  return (
    <section className="pokemon__card">
      <h2>{name[ 0 ].toUpperCase() + name.slice(1).toLowerCase()}</h2>
      <img src={src} alt={name} />
      <section className="pokemon__stats">
        <h3>Strength: {strength}</h3>

        <ul>
          <h3>Abilities:</h3>
          {abilities.map((item) =>
          {
            return <li key={item.ability.name}>{item.ability.name[ 0 ].toUpperCase() + item.ability.name.slice(1).toLowerCase()}</li>
          })}
        </ul>
      </section>
    </section>
  )
}

export default PokemonCard
