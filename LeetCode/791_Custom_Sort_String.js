/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let library = new Map();
  for (let char of s) {
    library.set(char, library.get(char) ? library.get(char) + 1 : 1);
  }
  let result = "";
  for (let char of order) {
    if (library.has(char)) {
      result += char.repeat(library.get(char));
      library.delete(char);
    }
  }
  for (const [key, count] of library) {
    result += key.repeat(count);
  }

  return result;
};
