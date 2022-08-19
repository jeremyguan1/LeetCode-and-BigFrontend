/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let res = "";
  for (let i = shifts.length - 2; i >= 0; i--) {
    shifts[i] += shifts[i + 1];
  }

  for (let i = 0; i < s.length; i++) {
    let shifted = (s[i].charCodeAt(0) - 97 + shifts[i]) % 26;
    res += String.fromCharCode(shifted + 97);
  }
  return res;
};
