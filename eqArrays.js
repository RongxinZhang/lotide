const { assertEqual } = require("./assertEqual");

const eqArrays = function (list1, list2, opts) {
  if (opts && opts.sort) {
    list1 = list1.sort();
    list1 = list2.sort();
  }

  if (!list1 || !list2) {
    return false;
  }

  if (list1.length !== list2.length) {
    return false;
  }

  for (let i = 0; i < list1.length; i++) {

    if (Array.isArray(list1[i]) != Array.isArray(list2[i])){
      return false
    }

    // Recursion
    if (Array.isArray(list1[i]) && Array.isArray(list2[i])){
      // Only return if false
      if (!eqArrays(list1[i], list2[i])){
        return false;
      }
    } else if (list1[i] !== list2[i]) {
      return false;
    }
    
  }

  return true;
};

const eqArraysTest = function(){
  // Test for recursion 
  assertEqual(eqArrays([5, [6], 7], [5, 6, 7]), false);
  assertEqual(eqArrays([5, [6], 7], [5, [6], 7]), true);
  assertEqual(eqArrays([[2, 3]], [[2, 3]]), true);
  assertEqual(eqArrays([[4]], [[4, 5]]), false);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

  assertEqual(eqArrays([[2, [[3]]], [[4]]], [[2, [[3]]], [[4]]]), true);

  assertEqual(eqArrays([5, 6, 7], [5, 6, 7]), true);
  assertEqual(eqArrays([], [5, 6, 7]), false);
  assertEqual(eqArrays([5, 6, 7], [5, 6, 8]), false);
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  assertEqual(eqArrays([2, 1, 3], [1, 2, 3]), false); // => should PASS
  assertEqual(eqArrays([2, 1, 3], [1, 2, 3], { sort: true }), true); // => should PASS
}

eqArraysTest()

module.exports = { eqArrays };
