const assert = require('chai').assert;
const tail = require('../tail.js');
const assertEqual = require('../assertEqual')

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// console.log(tail([1]));
// console.log(tail([]));

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] when inputting ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse" ,"Labs"]);
  });
})