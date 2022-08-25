/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let c of s) {
    if (c === "{" || c === "[" || c === "(") {
      stack.push(c);
    } else if (c === "}") {
      if (stack.pop() !== "{") return false;
    } else if (c === "]") {
      if (stack.pop() !== "[") return false;
    } else if (c === ")") {
      if (stack.pop() !== "(") return false;
    }
  }

  return stack.length === 0;
};
