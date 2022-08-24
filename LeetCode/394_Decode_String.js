/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      while (stack[stack.length - 1] !== "[") {
        str = stack.pop() + str;
      }
      stack.pop();
      let num = "";
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      let result = str.repeat(Number(num));
      stack.push(result);
    }
  }

  return stack.join("");
};
