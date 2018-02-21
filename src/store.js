import reducer from './reducer'
import {createStore} from 'redux'

export function configureStore() {
  return createStore(reducer)
}
