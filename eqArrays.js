const { assertEqual } = require("./assertEqual");

const eqArrays = function (list1, list2, opts) {
  if (opts && opts.sort) {
    list1 = list1.sort();
    list1 = list2.sort();
  }

  let allMatch = true;

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      allMatch = false;
    }
  }

  return allMatch;
};

assertEqual(eqArrays([5, 6, 7], [5, 6, 7]), true);
assertEqual(eqArrays([5, 6, 7], [5, 6, 8]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([2, 1, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([2, 1, 3], [1, 2, 3], { sort: true }), true); // => should PASS
