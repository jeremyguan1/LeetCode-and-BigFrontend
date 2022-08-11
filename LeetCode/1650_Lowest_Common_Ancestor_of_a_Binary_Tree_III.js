/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
  let p_copy = p;
  let q_copy = q;

  while (p_copy !== q_copy) {
    p_copy = p_copy === null ? q : p_copy.parent;
    q_copy = q_copy === null ? p : q_copy.parent;
  }
  return p_copy;
};
