/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  if (num2.length > num1.length) return addStrings(num2, num1);

  let carry = 0;
  let sum = "";
  let n1idx = num1.length - 1;
  let n2Idx = num2.length - 1;

  while (n1idx >= 0) {
    let cur1 = num1[n1idx] - "0";
    let cur2 = n2Idx < 0 ? 0 : num2.charAt(n2Idx) - "0";
    let curSum = cur1 + cur2 + carry;
    carry = 0;
    if (curSum > 9) {
      carry = Math.floor(curSum / 10);
      curSum = curSum % 10;
    }
    sum = `${curSum.toString()}${sum}`;
    n2Idx--;
    n1idx--;
  }
  if (carry > 0) {
    sum = `${carry.toString()}${sum}`;
  }
  return sum;
};
