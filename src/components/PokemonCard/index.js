import { useEffect, useState } from "react"
import "./Pokemoncard.css"

function PokemonCard({ name, src, strength, abilities })
{
  return (
    <section className="pokemon__card">
      <h2>{name[ 0 ].toUpperCase() + name.slice(1).toLowerCase()}</h2>
      <img src={src} alt={name} />
      <section className="pokemon__stats">
        <p>Strength:{strength}</p>
        <ul>
          {abilities.map((item) =>
          {
            return <li key={item.ability.name}>{item.ability.name[ 0 ].toUpperCase() + name.slice(1).toLowerCase()}</li>
          })}
        </ul>
      </section>
    </section>
  )
}

export default PokemonCard
