const assertArraysEqual = require('./assertArraysEqual'); //import function assertArraysEqual

//function that stores indices of letters in a string in an obj's values with keys as the letters of the strings
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i]
      }
    }
  }
  return results;
};

module.exports = letterPositions;

const expected = {
  h: [0],
  e: [1],
  l: [2,3],
  o: [4],
}

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);