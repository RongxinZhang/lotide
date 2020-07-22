const { assertArraysEqual } = require("./assertArraysEqual");

const middle = function (arr) {
  const midIndex = arr.length / 2;

  if (arr.length <= 2) return [];

  // Check if it's an odd number of values
  if (!Number.isInteger(midIndex)) {
    return [arr[Math.floor(midIndex)]];
  }
  return arr.slice(midIndex - 1, midIndex + 1);
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
