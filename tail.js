const { assertEqual } = require("./assertEqual");

const tail = function (list) {
  let newList = list.slice();
  if (newList && newList.length > 0) {
    return newList.slice(1);
  } else {
    throw "no list provided";
  }
};

let list = ["Hello", "Lighthouse", "Labs"];
const result = tail(list);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(list.length, 3); // ensure second element is "Labs"
