//function that asserts if two arrays are equal by comparing elements
const eqArrays = function(arr1, arr2) { //checks if arrays are equal length first
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    }
  return true;
};

module.exports = eqArrays; //exports eqArrays
