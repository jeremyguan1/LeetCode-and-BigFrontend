// This is a JavaScript coding problem from BFE.dev

/**
 * @param {string[][]} message
 * @return {string}
 */
function decode(message) {
  // your code here
  let i = 0,
    j = 0,
    cols = message[0]?.length;
  let decoded = "",
    step = 1;

  while (j < cols) {
    decoded += message[i][j];
    if (!message[i + step]) {
      step *= -1;
    }
    j++;
    i += step;
  }
  return decoded;
}

const input = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"],
];

console.log(decode(input));
