const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      } 
    }
  return true;
};

const countLetters = function(string) {
  const count = {};
  const removeSpaceStr = string.replaceAll(" ", "");
  for (let char of removeSpaceStr) {
    if (count[char]) {
      count[char]++;
    } else {
        count[char] = 1;
    }
  }
  console.log(count);
  return count;
};

console.log(countLetters("lighthouse in the house"));

