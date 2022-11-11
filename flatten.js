const assertArraysEqual = require('./assertArraysEqual'); //import function assertArraysEqual


const flatten = function(arr) {
  const flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArr.push(arr[i][j]);
      }
    } else {
      flatArr.push(arr[i]);
    }
  }
  return flatArr;
}

module.exports = flatten;

const testArr = [1, 2, [3, 4], 5, [6]]
flatten(testArr) // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten(testArr), testArr); //should be false, original testArr has nested arrays