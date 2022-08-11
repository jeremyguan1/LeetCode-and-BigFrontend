/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let arr = path.split("/");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "." || arr[i] === "") continue;
    if (arr[i] === "..") stack.pop();
    else stack.push(arr[i]);
  }
  return `/${stack.join("/")}`;
};
