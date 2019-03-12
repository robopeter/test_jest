/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import * as getters from '../../../src/store/module-example/getters'

describe('Mount Quasar', () => {
  // Actual test I'm trying to run:
  it('Gets doubled val', () => {
    const state = {
      myVal: 2
    }
    expect(getters.getMyValTwoX(state)).toEqual(4)
  })
})
