/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return null;
  let first = null;
  let last = null;

  const helper = (root) => {
    if (root) {
      helper(root.left);

      if (last) {
        last.right = root;
        root.left = last;
      } else {
        first = root;
      }
      last = root;
      helper(root.right);
    }
  };

  helper(root);
  last.right = first;
  first.left = last;
  return first;
};
