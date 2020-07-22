const { assertEqual } = require("./assertEqual");

const countOnly = function (allItems, itemsToCount) {
  let responseObj = {};
  // Loop through firstname
  for (let item of allItems) {
    // Check if item is truthy
    if (itemsToCount[item]) {
      responseObj[item] = responseObj[item] || 0;
      responseObj[item] += 1;
    }
  }
  return responseObj;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
