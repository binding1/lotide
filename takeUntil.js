//function that checks if two arrays are equal, imported
const eqArrays = require('./eqArrays'); 

const assertArraysEqual = require('./assertArraysEqual'); //import function assertArraysEqual

//function that logs elements until hitting a specified element
const takeUntil = function(array, callback) {
  const result = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = takeUntil;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);