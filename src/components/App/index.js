import {useEffect, useReducer} from 'react'
import Button from '../Button'
import PokemonCard from '../PokemonCard'
import WinnerText from '../WinnerText'
import './App.css'

let randomNumber1 = Math.ceil(Math.random() * 151)
let randomNumber2 = Math.ceil(Math.random() * 151)
const initialState = {
	id1: randomNumber1,
	id2: randomNumber2,
	pokemon1: null,
	pokemon2: null,
	message: 'Compare Pokemon to see which would be victorious!',
}
const ACTIONS = {
	SET_ID1: 'set_ID1',
	SET_ID2: 'set_ID2',
	SET_POKEMON1: 'set_pokemon1',
	SET_POKEMON2: 'set_pokemon2',
	SET_MESSAGE: 'set_message',
}
function reducer(state, action) {
	const {type, payload} = action
	switch (type) {
		case ACTIONS.SET_ID1:
			return {...state, id1: payload}
		case ACTIONS.SET_ID2:
			return {...state, id2: payload}
		case ACTIONS.SET_POKEMON1:
			return {...state, pokemon1: payload}
		case ACTIONS.SET_POKEMON2:
			return {...state, pokemon2: payload}
		case ACTIONS.SET_MESSAGE:
			return {...state, message: payload}
		default:
			return state
	}
}

function App() {
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

		dispatch({type: ACTIONS.SET_ID1, payload: randomNumber2})

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
		}
		if (sumP1 > sumP2) {
			dispatch({
				type: ACTIONS.SET_MESSAGE,
				payload: `${
					state.pokemon1.name[0].toUpperCase() +
					state.pokemon1.name.slice(1).toLowerCase()
				} would win!`,
			})
		} else if (sumP1 === sumP2) {
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
		<div className='App'>
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
		</div>
	)
}

export default App
