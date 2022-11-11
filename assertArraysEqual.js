const eqArrays = require('./eqArrays'); //importing eqArrays

//function that compares two errays and asserts if they're equal
const assertArraysEqual = function(arr1, arr2) { 
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual; //exports assertArraysEqual function

// assertArraysEqual([1, 2, 3],[3, 2, 1], '🛑🛑🛑 Assertion Failed: 1,2,3 !== 3,2,1');
// assertArraysEqual([1, 2, 3],[1, 2, 3], '✅✅✅ Assertion Passed: 1,2,3 === 1,2,3');