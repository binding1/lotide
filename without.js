const assertArraysEqual = require('./assertArraysEqual'); //import function assertArraysEqual

const without = function(source, itemsToRemove) {
  const resultArr = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        resultArr.splice(i, 1);
      }
    }
  }
  return resultArr;
}

module.exports = without; //exporting without function

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
