/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const tracker = new Map();
  for (let num of nums) {
    tracker.set(num, (tracker.get(num) || 0) + 1);
  }
  return nums.sort((a, b) => tracker.get(a) - tracker.get(b) || b - a);
};
