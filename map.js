//function that checks if two arrays are equal, imported
const eqArrays = require('./eqArrays'); 

const assertArraysEqual = require('./assertArraysEqual'); //import function assertArraysEqual

const words = ["ground", "control", "to", "major", "tom"];

//function that acts as built in function maps
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  } 
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

module.exports = map;

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);