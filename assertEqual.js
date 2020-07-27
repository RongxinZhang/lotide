// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === undefined || expected === undefined) {
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

module.exports = { assertEqual };
