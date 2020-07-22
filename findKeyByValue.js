const { assertEqual } = require("./assertEqual");

const findKeyByValue = function (map, valueToFind) {
  valueToFind = valueToFind + "";
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      if (map[key] === valueToFind) {
        return key;
      }
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
