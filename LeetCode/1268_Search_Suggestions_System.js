/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort();
  let result = [];
  let search = "";
  for (let char of searchWord) {
    search += char;
    result.push(
      products.filter((product) => product.startsWith(search)).slice(0, 3)
    );
  }
  return result;
};
