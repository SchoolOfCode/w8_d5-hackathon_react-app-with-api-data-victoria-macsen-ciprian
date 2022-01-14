import { useEffect, useState } from "react"
import Button from "../Button"
import PokemonCard from "../PokemonCard"
import WinnerText from "../WinnerText"
import "./App.css"

let randomNumber1 = Math.ceil(Math.random() * 151)
let randomNumber2 = Math.ceil(Math.random() * 151)

function App()
{
  const [ id1, setId1 ] = useState(randomNumber1)
  const [ id2, setId2 ] = useState(randomNumber2)
  const [ pokemon1, setPokemon1 ] = useState(null)
  const [ pokemon2, setPokemon2 ] = useState(null)
  const [ message, setMessage ] = useState(
    "Compare Pokemon to see which will will in a fight!"
  )

  useEffect(() =>
  {
    async function fetchPokemon()
    {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`)
      const data = await response.json()
      console.log("pokemon1: ", data.abilities)
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
      console.log("pokemon2: ", data.abilities)
      console.log("pokemon2 data: ", data)
      setPokemon2(data)
      // console.log('pokemon2###:', pokemon.abilities)
    }
    fetchPokemon2()
  }, [ id2 ])

  function handleClick()
  {
    let randomNumber1 = Math.ceil(Math.random() * 151)
    let randomNumber2 = Math.ceil(Math.random() * 151)
    setId1(randomNumber1)
    setId2(randomNumber2)
    setMessage("Compare Pokemon to see which will will in a fight!")
    // console.log(randomNumber1)
    // console.log(randomNumber2)
  }
  function comparePokemon()
  {
    let sumP1 =
      pokemon1.stats[ 0 ].base_stat +
      pokemon1.stats[ 1 ].base_stat +
      pokemon1.stats[ 2 ].base_stat
    let sumP2 =
      pokemon2.stats[ 0 ].base_stat +
      pokemon2.stats[ 1 ].base_stat +
      pokemon2.stats[ 2 ].base_stat
    if (sumP1 < sumP2)
    {
      console.log("P2 won", sumP1, sumP2)
      setMessage(
        `${pokemon2.name[ 0 ].toUpperCase() + pokemon2.name.slice(1).toLowerCase()
        } won`
      )
    }
    if (sumP1 > sumP2)
    {
      console.log("P1 won", sumP1, sumP2)
      setMessage(
        `${pokemon1.name[ 0 ].toUpperCase() + pokemon1.name.slice(1).toLowerCase()
        } won`
      )
    } else if (sumP1 === sumP2)
    {
      console.log("Draw", sumP1, sumP2)
      setMessage(
        `${pokemon1.name[ 0 ].toUpperCase() + pokemon1.name.slice(1).toLowerCase()
        } and ${pokemon2.name[ 0 ].toUpperCase() + pokemon2.name.slice(1).toLowerCase()
        } have the same strength`
      )
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
      <h1>Pokemon Card Play-Off</h1>
      <Button handleClick={comparePokemon} text="Compare pokemon" />

      <WinnerText text={message} />
      <section className="pokemoncontainer">
        <PokemonCard
          id={id1}
          name={pokemon1.name}
          src={pokemon1.sprites.other.home.front_default}
          strength={
            pokemon1.stats[ 0 ].base_stat +
            pokemon1.stats[ 1 ].base_stat +
            pokemon1.stats[ 2 ].base_stat
          }
          abilities={pokemon1.abilities}
          hp={pokemon1.stats[ 0 ].base_stat}
          attack={pokemon1.stats[ 1 ].base_stat}
          defence={pokemon1.stats[ 2 ].base_stat}
        />
        <PokemonCard
          id={id2}
          name={pokemon2.name}
          src={pokemon2.sprites.other.home.front_default}
          strength={
            pokemon2.stats[ 0 ].base_stat +
            pokemon2.stats[ 1 ].base_stat +
            pokemon2.stats[ 2 ].base_stat
          }
          abilities={pokemon2.abilities}
          hp={pokemon2.stats[ 0 ].base_stat}
          attack={pokemon2.stats[ 1 ].base_stat}
          defence={pokemon2.stats[ 2 ].base_stat}
        />
      </section>
      <Button handleClick={handleClick} text="Fetch pokemon" />
    </div>
  )
}

export default App
