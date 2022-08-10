/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let result = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    let square;
    if (Math.abs(nums[end]) > Math.abs(nums[start])) {
      square = nums[end];
      end--;
    } else {
      square = nums[start];
      start++;
    }
    result[i] = square * square;
  }

  return result;
};
