const { assertEqual } = require("./assertEqual");

const countLetters = function (sentence) {
  let responseObj = {};
  // Always converts item into a string
  sentence = sentence + "";

  let cleanedSentence = sentence.replace(/\s/g, "");

  for (const key in cleanedSentence) {
    if (cleanedSentence.hasOwnProperty(key)) {
      const letter = cleanedSentence[key];
      responseObj[letter] = responseObj[letter] || 0;
      responseObj[letter] += 1;
    }
  }
  return responseObj;
};

const expect1 = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
const actual1 = countLetters("lighthouse in the house");
assertEqual(JSON.stringify(actual1), JSON.stringify(expect1));

const expect2 = {};
const actual2 = countLetters("             ");
assertEqual(JSON.stringify(actual2), JSON.stringify(expect2));

const expect3 = { 1: 1 };
const actual3 = countLetters(1);
assertEqual(JSON.stringify(actual3), JSON.stringify(expect3));
