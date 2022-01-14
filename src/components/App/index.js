import { useEffect, useState } from "react";
import Button from "../Button";
import PokemonCard from "../PokemonCard";
import WinnerText from "../WinnerText";
import "./App.css";

let randomNumber = Math.ceil(Math.random() * 151);

function App() {
  const [id1, setId1] = useState(1);
  const [id2, setId2] = useState(randomNumber);
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);


  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`);
      const data = await response.json();
      console.log("pokemon: ", data);
      setPokemon1(data);
    }
    fetchPokemon();
  }, [id1]);
  
  useEffect(() => {
    async function fetchPokemon2() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`);
      const data = await response.json();
      console.log("pokemon: ", data);
      setPokemon2(data);
    }
    fetchPokemon2();
  }, [id2]);
  
  function handleClick() {
    let randomNumber = Math.ceil(Math.random() * 151);
    setId1(randomNumber);
    setId2(randomNumber + 1);
    console.log(randomNumber);
  }
  
  if (!pokemon1) {
    return <h2>Loading...</h2>;
  }

  if (!pokemon2) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="App">
      <Button handleClick={handleClick} text="Fetch pokemon" />
      <WinnerText text="Winner Pokemon" />
      <PokemonCard id={id1} name={pokemon1.name} src={pokemon1.sprites.front_default} hp={pokemon1.stats[0].base_stat} attack={pokemon1.stats[1].base_stat} defence={pokemon1.stats[2].base_stat}/>
      <PokemonCard id={id2} name={pokemon2.name} src={pokemon2.sprites.front_default} hp={pokemon2.stats[0].base_stat} attack={pokemon2.stats[1].base_stat} defence={pokemon2.stats[2].base_stat}/>
      <Button text="Compare pokemon" />
    </div>
  );
}

export default App;
