import { getRand } from '../constants'

describe('constants', () => { 
  it('getRand with no arguments', () => { 
    expect(getRand()).toEqual(0)
  });

  
  it('getRand with one argument', () => { 
    expect(getRand(2)).toBeLessThan(2)
  });

})
