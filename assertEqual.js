// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("LHL", "LHL");
// assertEqual(1, 2);