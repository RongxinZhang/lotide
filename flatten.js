const { assertArraysEqual } = require("./assertArraysEqual");

// cna p
const flatten = function (arr) {
  let responseArr = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      responseArr = responseArr.concat(flatten(el));
    } else {
      responseArr.push(el);
    }
  });
  console.log(responseArr);
  return responseArr;
};

let value = flatten([1, 2, [3, 4, [9, 8]], 5, [6]]);
console.log(value);
assertArraysEqual(value, [1, 2, 3, 4, 9, 8, 5, 6]);
