import { useEffect, useState } from "react";
import Button from "../Button";
import PokemonCard from "../PokemonCard";
import WinnerText from "../WinnerText";
import "./App.css";

let randomNumber = Math.ceil(Math.random() * 151);

function App() {
  const [pokemonId1, setPokemonId1] = useState(1);
  const [pokemonId2, setPokemonId2] = useState(randomNumber);

  function handleClick() {
    let randomNumber = Math.ceil(Math.random() * 151);
    setPokemonId1(randomNumber);
    setPokemonId2(randomNumber + 1);
    console.log(randomNumber);
  }

  return (
    <div className="App">
      <Button handleClick={handleClick} text="Fetch pokemon" />
      <WinnerText text="Winner Pokemon" />
      <PokemonCard id={pokemonId1} />
      <PokemonCard id={pokemonId2} />
      <Button text="Compare pokemon" />
    </div>
  );
}

export default App;
