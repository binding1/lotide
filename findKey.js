const assertEqual = require('./assertEqual'); //importing assertEqual;


//function that find the key of an object by value
const findKey = ((obj, callback) => {
  for (let k in obj) {
    for (let j in obj[k]) {
      if (callback(obj[k])) {
        return k;
      }
    }
  }
  console.log("here");
});

module.exports = findKey;

const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(test1, "noma");