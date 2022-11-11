//function that checks if two objects are equal
const eqObjects = require('./eqObjects');


//function that asserts if two arrays are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;;
  if (eqObjects(expected, actual)) { //callback eqObjects, which checks if two objects are equal
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4]};

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);