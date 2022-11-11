//function that counts up occurences of each unique character in a string
const countLetters = function(string) {
  const count = {};
  const removeSpaceStr = string.replaceAll(" ", ""); //removes spaces in string
  for (let char of removeSpaceStr) {
    if (count[char]) { //if the character exists in the object, increment counter
      count[char]++;
    } else { //if the character doesn't exist in the object, start counter at 0
      count[char] = 1;
    }
  }
  console.log(count);
  return count;
};

module.exports = countLetters; //exporting countLetters function

//TEST CODE
console.log(countLetters("lighthouse in the house"));

