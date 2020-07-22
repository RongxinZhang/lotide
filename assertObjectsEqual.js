const inspect = require("util").inspect; // <= add this line
const { eqObjects } = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  return eqObjects(actual, expected)
    ? console.log(
        `✅ Assertion assertArraysEqual Passed: "${inspect(
          actual
        )}" !== "${inspect(expected)}`
      )
    : console.log(
        `🛑 Assertion assertArraysEqual Failed: "${inspect(
          actual
        )}" !== "${inspect(expected)}`
      );
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const ef = { c: "1", d: ["2", "4"] };
const fe = { d: ["2", 3], c: "1" };
assertObjectsEqual(ef, fe); // => false

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const cd3 = { c: "1", d: { b: "2", a: "1" } };
const cd4 = { c: "1", d: { b: "2", z: "2" } };
assertObjectsEqual(cd3, cd4); // => false
