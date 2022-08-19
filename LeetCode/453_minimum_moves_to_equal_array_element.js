/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let moves = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    let diff = moves + nums[i] - nums[i - 1];
    nums[i] += moves;
    moves += diff;
  }

  return moves;
};
