/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let tracker = new Map();
  let ans = 0;
  let currentPosition = 0;

  for (let j = 0; j < s.length; j++) {
    if (tracker.has(s[j])) {
      currentPosition = Math.max(tracker.get(s[j]), currentPosition);
    }
    ans = Math.max(ans, j - currentPosition + 1);
    tracker.set(s[j], j + 1);
  }
  return ans;
};
