import {Map, fromJS} from 'immutable';
import reducer from '../reducer';

describe('reducer', () => {
    it('handles ADD_POINT on empty state', () => {
        const action = {
            type: 'ADD_POINT',
            player: 'p1'
        }
        const nextState = reducer(undefined,action);
        expect(nextState).toEqual(fromJS({ 
            counter: { 
              'p1': 1
            }
        }));
    });

    it('handles ADD_POINT on non-empty state', () => {
      const initState = fromJS({ 
        counter: { 
          'p1': 1
        }
      })
      const action = {
        type: 'ADD_POINT',
        player: 'p2'
      }
      const nextState = reducer(initState,action);
      expect(nextState).toEqual(fromJS({ 
        counter: { 
          'p1': 1,
          'p2': 1
        }
      }));
    });

    it('handles SET_PLAYERS', () => { 
      const action = { 
        type: 'SET_PLAYERS',
        count: 2
      };
      const nextState = reducer(undefined, action)
      expect(nextState).toEqual(fromJS({ 
        count: 2
      }));
    });

});
