const { assertArraysEqual } = require("./assertArraysEqual");

const takeUntil = function (array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) break;
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
let expected1 = [1, 2, 5, 7, 2];
assertArraysEqual(results1, expected1);

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
let expecte2 = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(results2, expecte2);
