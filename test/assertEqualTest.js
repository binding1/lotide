const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
  it('returns assertion failed when inputed "Lighthouse Labs" and "Bootcamp"', () => {
    assert.strictEqual(assertEqual(1, 1), '✅✅✅ Assertion Passed: 1 === 1');
  });
  it('returns assertion failed when inputed "Lighthouse Labs" and "Bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), '🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Bootcamp')
  })
})