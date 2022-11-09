const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// middle([1]) // => []
// middle([1, 2]) // => []

// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]

// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// const testArr = [1, 2, 3, 4];
// assertArraysEqual(testArr, middle(testArr));

describe('#middle', () => {
  it('should return [] if inputed [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('should return [3] if inputed [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  })
})