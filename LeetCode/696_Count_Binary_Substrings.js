/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let prev = 0;
  let current = 1;
  let answer = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      current++;
    } else {
      answer += Math.min(prev, current);
      prev = current;
      current = 1;
    }
  }
  return answer + Math.min(prev, current);
};
