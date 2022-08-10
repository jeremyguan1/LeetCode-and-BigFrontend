/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k %= nums.length;
  const rotate = (from, to) => {
    while (from < to) {
      [nums[from], nums[to]] = [nums[to], nums[from]];
      from++;
      to--;
    }
  };

  rotate(0, nums.length - 1);
  rotate(0, k - 1);
  rotate(k, nums.length - 1);
};
