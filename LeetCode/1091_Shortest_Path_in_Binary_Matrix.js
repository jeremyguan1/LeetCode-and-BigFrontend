/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  let directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ];
  let len = grid.length;
  if (grid[0][0] === 1) return -1;
  let queue = [[0, 0, 1]];
  while (queue.length > 0) {
    const [row, col, path] = queue.shift();
    if (len - 1 === row && len - 1 === col) return path;

    for (let [dx, dy] of directions) {
      let x = dx + row;
      let y = dy + col;

      if (x < 0 || x >= len) continue;
      if (y < 0 || y >= len) continue;
      if (grid[x][y] !== 0) continue;

      queue.push([x, y, path + 1]);
      grid[x][y] = 1;
    }
  }
  return -1;
};
