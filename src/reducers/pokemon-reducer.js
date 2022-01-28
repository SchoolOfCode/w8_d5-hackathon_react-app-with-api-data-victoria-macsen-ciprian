export const initialState = {
	id1: Math.ceil(Math.random() * 151),
	id2: Math.ceil(Math.random() * 151),
	pokemon1: null,
	pokemon2: null,
	message: 'Compare Pokemon to see which would be victorious!',
}
export const ACTIONS = {
	SET_ID1: 'set_ID1',
	SET_ID2: 'set_ID2',
	SET_POKEMON1: 'set_pokemon1',
	SET_POKEMON2: 'set_pokemon2',
	SET_MESSAGE: 'set_message',
}
export function reducer(state, action) {
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
