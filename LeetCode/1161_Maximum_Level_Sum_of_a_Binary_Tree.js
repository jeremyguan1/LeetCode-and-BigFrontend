/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  let stack = [root];
  const levels = [];
  while (stack.length > 0) {
    let len = stack.length;
    let level = [];

    for (let i = 0; i < len; i++) {
      let current = stack.shift();
      level.push(current.val);
      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
    }
    levels.push(level.reduce((acc, curr) => acc + curr));
  }
  return levels.indexOf(Math.max(...levels)) + 1;
};
