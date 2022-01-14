import Button from '../Button'
import PokemonCard from '../PokemonCard'
import WinnerText from '../WinnerText'
import "./App.css"

function App()
{
  return (
    <div className="App">
      <Button text='Fetch pokemon' />
      <WinnerText text='Winner Pokemon' />
      <PokemonCard />
      <Button text='Compare pokemon' />
    </div>
  )
}

export default App
