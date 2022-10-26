const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
   
        return false;
      } 
    }
  return true;
  }
};

const eqObjects = function(obj1, obj2) {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    let isEqual = true;
    for (let k of obj1Keys) {
      if ((Array.isArray(obj1[k]) && Array.isArray(obj2[k]))){
        isEqual = isEqual && eqArrays(obj1[k], obj2[k])
      } else {
       isEqual = isEqual && (obj1[k] === obj2[k]);
      }
    }
    return isEqual;
  }
};


const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1" };
assertEqual(ab['a'], "1");
assertEqual(ab['b'], "2");
assertEqual(ba['a'], "1");
assertEqual(ba['b'], "2");

assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);