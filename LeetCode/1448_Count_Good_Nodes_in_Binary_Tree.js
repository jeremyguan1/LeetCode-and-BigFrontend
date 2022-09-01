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
var goodNodes = function (root) {
  let answer = 0;
  let max = root;

  function helper(root, max) {
    if (!root) return null;
    if (root.val >= max.val) {
      answer++;
      max = root;
    }

    helper(root.left, max);
    helper(root.right, max);
  }

  helper(root, max);

  return answer;
};
