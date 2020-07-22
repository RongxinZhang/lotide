// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (!actual || !expected) {
    console.log("Please enter your values");
  }
  if (actual !== expected) {
    console.log(`🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  } else if (actual === expected) {
    console.log(`✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log("wtf?");
  }
};

const assertEqualRunTest = function () {
  // Comparing identical strings
  assertEqual("apple", "apple");
  // Comparing non-identical strings
  assertEqual("Lighthouse Labs", "Bootcamp");
  // Comparing identical numbers
  assertEqual(1, 1);
  // Comparing non-identical numbers
  assertEqual(1, 2);
};

module.exports = { assertEqual, assertEqualRunTest };
