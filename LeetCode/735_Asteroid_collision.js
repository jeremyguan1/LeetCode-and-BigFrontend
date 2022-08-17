/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    const current = asteroids[i];
    if ((stack.length === 0 || stack[stack.length - 1] < 0) && current < 0) {
      stack.push(current);
    } else if (current > 0) {
      stack.push(current);
    } else {
      let pop = stack.pop();
      if (Math.abs(current) > Math.abs(pop)) {
        i--;
      } else if (Math.abs(current) < Math.abs(pop)) {
        stack.push(pop);
      } else {
        continue;
      }
    }
  }
  return stack;
};
