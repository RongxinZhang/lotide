const { eqArrays } = require("./eqArrays");

const assertArraysEqual = function (actual, expected, opts) {
  if (!actual || !expected) {
    console.log("Please enter your values");
  }
  if (!eqArrays(actual, expected, opts)) {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  } else if (eqArrays(actual, expected, opts)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log("wtf?");
  }
};

const assertArrayEqualRunTest = function () {
  // Comparing identical strings
  assertArraysEqual([5, 6, 7], [5, 6, 7]);
  assertArraysEqual([5, 6, 7], [5, 6, 8]); // FAIL
  assertArraysEqual([], [5, 6, 8]); // FAIL
  assertArraysEqual([5, 6, 7], [5, 6, 8], { sort: true });
};

// assertArrayEqualRunTest();

module.exports = { assertArraysEqual, assertArrayEqualRunTest };
