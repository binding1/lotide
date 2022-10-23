const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    }
  return true;
};

const middle = function(arr) {
  const middleArr = [];
  if (arr.length < 3) {
    console.log(middleArr);
    return middleArr;
  } else if (arr.length % 2 === 1) {
    middleArr.push(arr[(Math.ceil((arr.length / 2) - 1))]);
    console.log(middleArr);
    return middleArr;
  } else if (arr.length % 2 === 0) {
    middleArr.push(arr[arr.length / 2] - 1, arr[arr.length / 2]);
    console.log(middleArr);
    return middleArr;
  }
};

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const testArr = [1, 2, 3, 4];
assertArraysEqual(testArr, middle(testArr));