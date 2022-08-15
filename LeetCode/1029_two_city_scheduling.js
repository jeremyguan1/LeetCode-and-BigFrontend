/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let sum = 0;
  let n = Math.floor(costs.length / 2);
  for (let i = 0; i < n; i++) {
    sum += costs[i][0] + costs[n + i][1];
  }
  return sum;
};
