const middle = function(arr) {
  const middleArr = [];
  if (arr.length < 3) {
    console.log(middleArr);
    return middleArr;
  } else if (arr.length % 2 === 1) {
    middleArr.push(arr[(Math.ceil((arr.length / 2) - 1))]);
    console.log(middleArr);
    return middleArr;
  } else if (arr.length % 2 === 0) {
    middleArr.push(arr[arr.length / 2] - 1, arr[arr.length / 2]);
    console.log(middleArr);
    return middleArr;
  }
};

module.exports = middle;

