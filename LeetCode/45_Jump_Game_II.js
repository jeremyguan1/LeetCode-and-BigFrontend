/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let answer = 0;
  let jumpEnd = 0;
  let farthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === jumpEnd) {
      answer++;
      jumpEnd = farthest;
    }
  }
  return answer;
};
