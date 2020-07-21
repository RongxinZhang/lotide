const { assertEqual } = require("./assertEqual");

const head = function (list) {
  if (list && list.length > 0) {
    return list[0];
  } else {
    throw "errro";
  }
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
