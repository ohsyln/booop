export const ADD_POINT = 'ADD_POINT'
export const SET_PLAYERS = 'SET_PLAYERS'
export const RESET = 'RESET'

export const addPoint = (player) => ({
  type: ADD_POINT,
  player
})

export const setPlayers = (size) => ({ 
  type: SET_PLAYERS,
  count: size
})

export const reset = () => ({ 
  type: RESET
})
