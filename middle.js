//function that returns the middle elements of an array

const middle = function(arr) {
  const middleArr = [];
  if (arr.length < 3) { //if array length is 2 or less, return nothing
    console.log(middleArr);
    return middleArr;
  } else if (arr.length % 2 === 1) { //if array length is odd, return the middle number
    middleArr.push(arr[(Math.ceil((arr.length / 2) - 1))]);
    console.log(middleArr);
    return middleArr;
  } else if (arr.length % 2 === 0) { //if array length is even, return the middle two numbers
    middleArr.push(arr[arr.length / 2] - 1, arr[arr.length / 2]);
    console.log(middleArr);
    return middleArr;
  }
};

module.exports = middle;

