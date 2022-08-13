/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  // your code here
  if (!tree) return 0;
  let max = 0;
  for (let i = 0; i < tree.children.length; i++) {
    max = Math.max(max, getHeight(tree.children[i]));
  }
  return max + 1;
}
