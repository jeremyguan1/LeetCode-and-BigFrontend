/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let leftMax = 0;
  let right = height.length - 1;
  let rightMax = 0;
  let ans = 0;

  while (left <= right) {
    if (height[left] >= height[right]) {
      height[right] >= rightMax
        ? (rightMax = height[right])
        : (ans += rightMax - height[right]);
      right--;
    } else {
      height[left] >= leftMax
        ? (leftMax = height[left])
        : (ans += leftMax - height[left]);
      left++;
    }
  }
  return ans;
};
