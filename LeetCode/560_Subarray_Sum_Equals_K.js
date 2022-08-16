/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let mapTracker = new Map();
  mapTracker.set(0, 1);
  let result = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (mapTracker.has(sum - k)) {
      result += mapTracker.get(sum - k);
    }
    mapTracker.set(sum, mapTracker.has(sum) ? mapTracker.get(sum) + 1 : 1);
  }
  return result;
};
