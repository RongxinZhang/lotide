const { assertEqual } = require("./assertEqual");
const { assertArraysEqual } = require("./assertArraysEqual");

const letterPositions = function (sentence) {
  const results = {};
  sentence = sentence + "";

  let cleanedSentence = sentence.split("");

  cleanedSentence.forEach((letter, index) => {
    if (letter !== " ") {
      results[letter] = results[letter] || [];
      results[letter].push(index);
    }
  });

  return results;
};

const actual1 = letterPositions("lighthouse in the house");
const expect1 = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12],
};
assertEqual(JSON.stringify(actual1), JSON.stringify(expect1));

const actual2 = letterPositions("hello");
const expect2 = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4],
};
assertEqual(JSON.stringify(actual2), JSON.stringify(expect2));
