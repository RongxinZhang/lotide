const { assertEqual } = require("./assertEqual");

const findKey = function (obj, callback) {
  if (callback === undefined) return "";
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (callback(obj[key])) {
        return key;
      }
    }
  }
};

const input = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

assertEqual(
  findKey(input, (x) => x.stars === 2),
  "noma"
);
