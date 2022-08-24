/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
  let stack = new Array(n).fill(0);
  let start = 0;
  for (let i = 0; i < ranges.length; i++) {
    let start = Math.max(0, i - ranges[i]);
    stack[start] = i + ranges[i];
  }

  let answer = 0;
  let farthest = 0;
  let jumpEnd = 0;
  for (let i = 0; i <= n; i++) {
    if (i > farthest) return -1;
    if (i > jumpEnd) {
      answer++;
      jumpEnd = farthest;
    }
    farthest = Math.max(farthest, stack[i]);
  }
  return answer;
};
