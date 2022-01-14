import { useEffect, useState } from 'react'
import Button from '../Button'
import PokemonCard from '../PokemonCard'
import WinnerText from '../WinnerText'
import "./App.css"

function App()
{
  const [ pokemonId, setPokemonId ] = useState(1)
  function handleClick()
  {
    let randomNumber = Math.ceil(Math.random() * 151)
    setPokemonId(randomNumber)
    console.log(randomNumber)

  }

  return (
    <div className="App">
      <Button handleClick={handleClick} text='Fetch pokemon' />
      <WinnerText text='Winner Pokemon' />
      <PokemonCard id={pokemonId} />
      <Button text='Compare pokemon' />
    </div>
  )
}

export default App
