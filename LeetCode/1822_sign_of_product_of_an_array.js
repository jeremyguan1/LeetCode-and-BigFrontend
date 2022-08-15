/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 0 || sum === 0) return 0;
    sum *= nums[i];
  }
  return Math.sign(sum);
};
