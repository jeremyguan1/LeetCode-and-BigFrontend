// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }

/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  // your code here
  if (!node) return null;
  let temp = node.left;
  node.left = node.right;
  node.right = temp;
  if (node.right) invert(node.right);
  if (node.left) invert(node.left);
  return node;
}
