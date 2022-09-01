/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "";
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    let len1 = helper(s, i, i);
    let len2 = helper(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (end - start < len) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

function helper(str, left, right) {
  let start = left;
  let end = right;
  while (start >= 0 && end < str.length && str[start] === str[end]) {
    start--;
    end++;
  }
  return end - start - 1;
}
