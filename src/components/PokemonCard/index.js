import { useEffect, useState } from "react";

function PokemonCard({ id }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      console.log("pokemon: ", data);
      setPokemon(data);
    }
    fetchPokemon();
  }, [id]);
  if (!pokemon) {
    return <h2>Loading...</h2>;
  }
  return (
    <section className="pokemon__card">
      <h2>NAME:{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <section className="pokemon__stats">
        <p>HP={pokemon.stats[0].base_stat}</p>
        <p>ATTACK={pokemon.stats[1].base_stat}</p>
        <p>DEFENSE={pokemon.stats[2].base_stat}</p>
      </section>
    </section>
  );
}

export default PokemonCard;
