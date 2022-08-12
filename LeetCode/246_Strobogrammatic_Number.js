/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  let myMap = new Map();
  myMap.set("6", "9");
  myMap.set("9", "6");
  myMap.set("0", "0");
  myMap.set("1", "1");
  myMap.set("8", "8");
  let l = 0;
  let r = num.length - 1;
  while (l <= r) {
    if (num[l] != myMap.get(num[r])) return false;
    l++;
    r--;
  }
  return true;
};
