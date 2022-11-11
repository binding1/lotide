const assertEqual = require('./assertEqual.js'); //importing assertEqual function

const countOnly = function (allItems, itemsToCount) { //function that counts number of occurences of an element that has value true in an array and adds them to an objec
  const results = {};
  for (let i = 0; i < allItems.length; i++) {
    for (k in itemsToCount) {
      if (itemsToCount[k] && allItems[i] === k) {
        if (!results[k]) {
          results[k] = 1;
        } else {
          results[k]++;
        }
      }
    }
  }
  return results;
};

module.exports = countOnly; //exporting countOnly function

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
