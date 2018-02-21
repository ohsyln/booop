import { Dimensions } from 'react-native'

export const TILES_TO_WIN = 100

export const INF = 99999
export const BOX_HEIGHT = Dimensions.get('window').height
export const BOX_WIDTH = Dimensions.get('window').width
export const TILE_PER_HEIGHT = [2,5,7,9]
export const TILE_PER_WIDTH = [2,3,4,5]
export const TILE_PER_LEVEL = [7,21,71,INF,INF]

export const BGCOLOR = '#1e1e1e'
export const STARTCOLORS = ['#FB8B24','#D90368','#820263']
export const COLORS = ['#F47983','#87D37C','#19B5FE','#F9690E']
export const TILES_PER_COL = 20
export const FADE_TIME = 100
export const MAX_LEVEL = 4
export const FLIPPED = -1

export function getRand() {
  if (arguments.length === 0) return 0;

  const min = arguments[0];
  return Math.floor(Math.random() * min);
}

export function createArray(N) {
  var foo = []
  for (var i = 0; i < N; i++) {
    foo.push(i)
  }
  return foo
}
