import {useEffect, useReducer} from 'react'
import {ACTIONS, initialState, reducer} from '../../reducers/pokemon-reducer'
import Button from '../Button'
import PokemonCard from '../PokemonCard'
import WinnerText from '../WinnerText'
import './Main.css'
function Main() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		async function fetchPokemon() {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${state.id1}`
			)
			const data = await response.json()
			dispatch({type: ACTIONS.SET_POKEMON1, payload: data})
		}
		fetchPokemon()
	}, [state.id1])

	useEffect(() => {
		async function fetchPokemon2() {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${state.id2}`
			)
			const data = await response.json()
			dispatch({type: ACTIONS.SET_POKEMON2, payload: data})
		}
		fetchPokemon2()
	}, [state.id2])

	function handleClick() {
		let randomNumber1 = Math.ceil(Math.random() * 151)
		let randomNumber2 = Math.ceil(Math.random() * 151)
		dispatch({type: ACTIONS.SET_ID1, payload: randomNumber1})

		dispatch({type: ACTIONS.SET_ID2, payload: randomNumber2})

		dispatch({
			type: ACTIONS.SET_MESSAGE,
			payload: 'Compare Pokemon to see which would be victorious!',
		})
	}
	function comparePokemon() {
		let sumP1 =
			state.pokemon1.stats[0].base_stat +
			state.pokemon1.stats[1].base_stat +
			state.pokemon1.stats[2].base_stat
		let sumP2 =
			state.pokemon2.stats[0].base_stat +
			state.pokemon2.stats[1].base_stat +
			state.pokemon2.stats[2].base_stat
		if (sumP1 < sumP2) {
			dispatch({
				type: ACTIONS.SET_MESSAGE,
				payload: `${
					state.pokemon2.name[0].toUpperCase() +
					state.pokemon2.name.slice(1).toLowerCase()
				} would win!`,
			})
		} else if (sumP1 > sumP2) {
			dispatch({
				type: ACTIONS.SET_MESSAGE,
				payload: `${
					state.pokemon1.name[0].toUpperCase() +
					state.pokemon1.name.slice(1).toLowerCase()
				} would win!`,
			})
		} else {
			dispatch({
				type: ACTIONS.SET_MESSAGE,
				payload: `${
					state.pokemon1.name[0].toUpperCase() +
					state.pokemon1.name.slice(1).toLowerCase()
				} and ${
					state.pokemon2.name[0].toUpperCase() +
					state.pokemon2.name.slice(1).toLowerCase()
				} have the same strength`,
			})
		}
	}

	if (!state.pokemon1 || !state.pokemon2) {
		return <h2>Loading...</h2>
	}
	return (
		<main>
			<h1>Pokemon Card Play-Off</h1>
			<Button handleClick={comparePokemon} text='Compare pokemon' />

			<WinnerText text={state.message} />
			<section className='pokemoncontainer'>
				<PokemonCard
					id={state.id1}
					name={state.pokemon1.name}
					src={state.pokemon1.sprites.other.home.front_default}
					strength={
						state.pokemon1.stats[0].base_stat +
						state.pokemon1.stats[1].base_stat +
						state.pokemon1.stats[2].base_stat
					}
					abilities={state.pokemon1.abilities}
					hp={state.pokemon1.stats[0].base_stat}
					attack={state.pokemon1.stats[1].base_stat}
					defence={state.pokemon1.stats[2].base_stat}
				/>
				<PokemonCard
					id={state.id2}
					name={state.pokemon2.name}
					src={state.pokemon2.sprites.other.home.front_default}
					strength={
						state.pokemon2.stats[0].base_stat +
						state.pokemon2.stats[1].base_stat +
						state.pokemon2.stats[2].base_stat
					}
					abilities={state.pokemon2.abilities}
					hp={state.pokemon2.stats[0].base_stat}
					attack={state.pokemon2.stats[1].base_stat}
					defence={state.pokemon2.stats[2].base_stat}
				/>
			</section>
			<Button handleClick={handleClick} text='Fetch pokemon' />
		</main>
	)
}

export default Main
