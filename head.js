
const head = function (list) {
  if (list && list.length > 0) {
    return list[0];
  } else {
    throw "errro";
  }
};

module.exports = head