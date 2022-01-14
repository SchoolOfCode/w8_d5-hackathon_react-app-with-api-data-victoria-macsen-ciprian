import { useEffect, useState } from 'react'

function PokemonCard({ name, image, hp, attack, defence, id })
{
  const [ pokemon, setPokemon ] = useState(null)
  useEffect(() =>
  {
    async function fetchPokemon()
    {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      console.log('pokemon: ', data)
    }
    fetchPokemon()
  }, [ id ])
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
  )
}

export default PokemonCard
