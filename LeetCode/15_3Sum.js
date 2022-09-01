/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      twoSum(nums, i, res);
    }
  }
  return res;
};

function twoSum(nums, start, ans) {
  let seen = new Map();

  for (let j = start + 1; j < nums.length; j++) {
    let curr = -nums[start] - nums[j];
    if (seen.has(curr)) {
      ans.push([nums[start], nums[j], curr]);
      while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
        j++;
      }
    }
    seen.set(nums[j], j);
  }
}
