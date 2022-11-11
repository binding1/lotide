const assertEqual = require('./assertEqual'); //importing assertEqual;


//function that finds the key of a specified value in an object
const findKeyByValue = function(obj, value) {
  let resultKey;
  for (let k in obj) {
    if (obj[k] === value) {
      resultKey = k;
    }
  }
  console.log(resultKey);
  return resultKey;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  crime: "Breaking Bad"
};

module.exports = findKeyByValue;

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "crime"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "Anime"), undefined));
