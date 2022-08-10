/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let tracker = "";
  let open = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      open++;
    } else if (s[i] === ")") {
      if (open === 0) continue;
      open--;
    }

    tracker += s[i];
  }
  let result = "";
  for (let i = tracker.length - 1; i >= 0; i--) {
    if (tracker[i] === "(" && open-- > 0) continue;
    result += tracker[i];
  }

  return [...result].reverse().join("");
};

console.log(minRemoveToMakeValid(""));
