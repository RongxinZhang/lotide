const { assertEqual } = require("./assertEqual");
// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

// const args = process.argv.splice(2);

const args = ["testing"];

const obfuscate = function (password) {
  let response = password.split("");
  response.forEach((letter, index) => {
    switch (letter.toLowerCase()) {
      case "a":
        response[index] = "4";
        break;

      case "e":
        response[index] = "3";
        break;

      case "o":
        response[index] = "0";
        break;

      case "l":
        response[index] = "1";
        break;

      default:
        break;
    }
  });
  return response.join("");
};

const test1 = "testing";
assertEqual(obfuscate(test1), "t3sting");

const test2 = "aeol";
assertEqual(obfuscate(test2), "4301");

const test3 = "AeoL";
assertEqual(obfuscate(test3), "4301");
