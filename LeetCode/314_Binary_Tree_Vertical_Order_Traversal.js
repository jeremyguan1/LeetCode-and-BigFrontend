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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  if (!root) return [];
  let currMap = new Map();
  let stack = [[root, 1]];

  while (stack.length > 0) {
    const [node, col] = stack.shift();
    if (currMap.has(col)) currMap.get(col).push(node.val);
    else currMap.set(col, [node.val]);
    if (node.left) stack.push([node.left, col - 1]);
    if (node.right) stack.push([node.right, col + 1]);
  }
  currMap = Array.from(currMap.entries()).sort((a, b) => a[0] - b[0]);
  return currMap.map((x) => x[1]);
};
