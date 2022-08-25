/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let stack = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (stack.has(target - nums[i]) && i !== stack.get(target - nums[i])) {
      return [stack.get(target - nums[i]), i];
    }
    stack.set(nums[i], i);
  }

  return [];
};
