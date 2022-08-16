/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;

  const helper = function (row, col) {
    if (
      row < "0" ||
      col < "0" ||
      row >= grid.length ||
      col >= grid[row].length ||
      grid[row][col] === "0"
    )
      return;
    grid[row][col] = "0";
    helper(row + 1, col);
    helper(row - 1, col);
    helper(row, col - 1);
    helper(row, col + 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        helper(i, j);
      }
    }
  }

  return count;
};
