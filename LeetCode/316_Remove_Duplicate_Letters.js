/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let seen = new Map();
  let tracker = new Map();
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    tracker.set(s[i], i);
  }
  for (let i = 0; i < s.length; i++) {
    if (!seen.has(s[i])) {
      //i = 2 a < d && a,2 < d,5
      while (
        stack.length > 0 &&
        s[i] < stack[stack.length - 1] &&
        tracker.get(stack[stack.length - 1]) > i
      ) {
        seen.delete(stack.pop());
      }
      seen.set(s[i], true);
      stack.push(s[i]);
    }
  }

  return [...seen.keys()].join("");
};
