import {
  ADD_POINT, 
  SET_PLAYERS,
  RESET,
} from './actions'
import {Map, List} from 'immutable'
import {FLIPPED} from './constants'

const initialState = Map()

function addPoint(state, player) {
  if (player === FLIPPED) return state
  return state.updateIn(['counter',player], 0, (t)=>t+1)
}

function setPlayers(state, count) {
  return state.set('count', count)
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POINT:
      return addPoint(state, action.player);
    case SET_PLAYERS:
      return setPlayers(state, action.count);
    case RESET:
      return initialState;
    default:
      return state;
  }
}
