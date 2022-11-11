const assert = require('chai').assert;
const countOnly = require('../countOnly'); //importing countOnly function
const assertEqual = require('../assertEqual.js'); //importing assertEqual function

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

describe('#countOnly', () => {
  it('should return 1 if counting only for "Jason" with value set as true.', () => {
    assert.strictEqual(assertEqual(result1["Jason"], '🛑🛑🛑 Assertion Failed: 1 !== 1'));
  })
})