const { assertEqual } = require("./assertEqual");
const { eqArrays } = require("./eqArrays");

const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length != Object.keys(obj2).length) return false;
  // console.log("1", obj1, obj2);

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      const el1 = obj1[key];
      const el2 = obj2[key];

      // Check if an el is an object
      if (typeof el1 === "object") {
        if (Array.isArray(el1)) {
          // Only return something if there is a mismatch
          if (!eqArrays(el1, el2)) return false;
        } else {
          if (!eqObjects(el1, el2)) return false;
        }
      } else {
        if (el1 !== el2) return false;
      }
    }
  }
  return true;
};

const testEqObjects = function () {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true); // => true

  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false); // => false

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true); // => true

  const ef = { c: "1", d: ["2", "4"] };
  const fe = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(ef, fe), false); // => true

  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false); // => false

  const cd3 = { c: "1", d: { b: "2", a: "1" } };
  const cd4 = { c: "1", d: { b: "2", z: "2" } };
  assertEqual(eqObjects(cd3, cd4), false); // => false
};

moduel.exports = { eqObjects };
