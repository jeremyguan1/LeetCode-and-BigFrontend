/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function (heights) {
  let max = -1;
  let result = [];

  for (let i = heights.length - 1; i >= 0; i--) {
    if (heights[i] > max) {
      max = heights[i];
      result.push(i);
    }
  }
  return result.reverse();
};

console.log(findBuildings([1, 3, 2, 4]));
