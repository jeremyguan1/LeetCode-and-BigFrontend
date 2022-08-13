/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [];
  let num = "";
  let sign = null;

  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " ") continue;
    if (!isNaN(s[i])) {
      num += s[i];
    }
    if (isNaN(s[i])) {
      switch (sign) {
        case "+":
        case null:
          stack.push(num);
          break;
        case "-":
          stack.push(num * -1);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(parseInt(stack.pop() / num, 10));
          break;
      }

      sign = s[i];
      num = "";
    }
  }

  return stack.reduce((prev, current) => prev + Number(current), 0);
};

console.log(calculate("42"));
