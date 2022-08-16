/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let tracker = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    tracker.set(nums[i], (tracker.get(nums[i]) || 0) + 1);
  }

  for (const [val, count] of tracker) {
    result[count] = (result[count] || new Set()).add(val);
  }
  let answer = [];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i]) answer.push(...result[i].values());
    if (answer.length === k) {
      return answer;
    }
  }
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topKFrequent(nums, k));
