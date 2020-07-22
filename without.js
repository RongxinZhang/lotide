const { assertArraysEqual } = require("./assertArraysEqual");

const without = function (arr, arrToExclude) {
  if (!Array.isArray(arr)) return [];

  let responseArr = [...arr];

  arr.forEach((item, i) => {
    arrToExclude.forEach((exclude) => {
      if (item === exclude) {
        responseArr.splice(i, 1);
      }
    });
  });

  return responseArr;
};

/**
 * TESTs
 */

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without("high", [1, 2, "3"]), []);

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]); // no need to capture return value for this test case
assertArraysEqual(without(12, ["lighthouse"]), []); // Should fail
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
