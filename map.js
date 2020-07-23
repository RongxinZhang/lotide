const { assertArraysEqual } = require("./assertArraysEqual");

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const response = map(words, (words) => {
  return words.length;
});
const expected = [6, 7, 2, 5, 3];

assertArraysEqual(response, expected);
