import { useEffect, useState } from "react"
import Button from "../Button"
import PokemonCard from "../PokemonCard"
import WinnerText from "../WinnerText"
import "./App.css"

let randomNumber = Math.ceil(Math.random() * 151)

function App()
{
  const [ id1, setId1 ] = useState(1)
  const [ id2, setId2 ] = useState(randomNumber)
  const [ pokemon1, setPokemon1 ] = useState(null)
  const [ pokemon2, setPokemon2 ] = useState(null)
  const [ message, setMessage ] = useState("Compare Pokemon to see which will will in a fight!")


  useEffect(() =>
  {
    async function fetchPokemon()
    {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`)
      const data = await response.json()
      // console.log("pokemon: ", data)
      setPokemon1(data)
      // console.log('pokemon1:', data.stats[ 1 ].base_stat)
    }
    fetchPokemon()
  }, [ id1 ])

  useEffect(() =>
  {
    async function fetchPokemon2()
    {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`)
      const data = await response.json()
      // console.log("pokemon: ", data)
      setPokemon2(data)
      // console.log('pokemon2:', data.stats[ 1 ].base_stat)

    }
    fetchPokemon2()
  }, [ id2 ])

  function handleClick()
  {
    let randomNumber1 = Math.ceil(Math.random() * 151)
    let randomNumber2 = Math.ceil(Math.random() * 151)
    setId1(randomNumber1)
    setId2(randomNumber2)
    // console.log(randomNumber1)
    // console.log(randomNumber2)
  }
  function comparePokemon()
  {
    let sumP1 = pokemon1.stats[ 0 ].base_stat + pokemon1.stats[ 1 ].base_stat + pokemon1.stats[ 2 ].base_stat
    let sumP2 = pokemon2.stats[ 0 ].base_stat + pokemon2.stats[ 1 ].base_stat + pokemon2.stats[ 2 ].base_stat
    if (sumP1 < sumP2)
    {

      console.log('P2 won', sumP1, sumP2)

    }
    if (sumP1 > sumP2)
    {

      console.log('P1 won', sumP1, sumP2)

    } else if (sumP1 === sumP2)
    {
      console.log('Draw', sumP1, sumP2)
    }
  }

  if (!pokemon1)
  {
    return <h2>Loading...</h2>
  }

  if (!pokemon2)
  {
    return <h2>Loading...</h2>
  }
  return (
    <div className="App">
      <Button handleClick={handleClick} text="Fetch pokemon" />
      <WinnerText text={message} />
      <PokemonCard id={id1} name={pokemon1.name} src={pokemon1.sprites.front_default} hp={pokemon1.stats[ 0 ].base_stat} attack={pokemon1.stats[ 1 ].base_stat} defence={pokemon1.stats[ 2 ].base_stat} />
      <PokemonCard id={id2} name={pokemon2.name} src={pokemon2.sprites.front_default} hp={pokemon2.stats[ 0 ].base_stat} attack={pokemon2.stats[ 1 ].base_stat} defence={pokemon2.stats[ 2 ].base_stat} />
      <Button handleClick={comparePokemon} text="Compare pokemon" />
    </div>
  )
}


export default App
