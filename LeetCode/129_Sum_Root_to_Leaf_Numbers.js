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
var sumNumbers = function (root) {
  let answer = 0;

  function helper(root, curr) {
    if (!root) return;
    curr = curr * 10 + root.val;
    if (root.left === null && root.right === null) {
      answer += curr;
    }
    helper(root.left, curr);
    helper(root.right, curr);
  }
  helper(root, 0);
  return answer;
};
