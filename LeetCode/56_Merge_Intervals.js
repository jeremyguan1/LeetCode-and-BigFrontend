/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let stack = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let current = stack.pop();
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1]);
      stack.push(current);
    } else {
      stack.push(current, intervals[i]);
    }
  }
  return stack;
};
