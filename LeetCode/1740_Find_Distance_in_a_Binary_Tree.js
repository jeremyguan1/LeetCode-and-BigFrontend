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
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var findDistance = function (root, p, q) {
  let newRoot = findTheRoot(root, p, q);
  console.log(newRoot);
  let count = 0;
  let leftFound = false;
  let rightFound = false;

  const dfs = (currRoot, sum) => {
    if (!currRoot) return;
    if (currRoot.val === p || currRoot.val === q) {
      count += sum;
      if (currRoot.val === p) {
        leftFound = true;
      } else if (currRoot.val === q) {
        rightFound = true;
      }
    }

    if (leftFound && rightFound) return;

    dfs(currRoot.left, sum + 1);
    dfs(currRoot.right, sum + 1);
  };
  dfs(newRoot, 0);
  return count;
};

function findTheRoot(root, p, q) {
  if (!root) return;

  if (root.val === p || root.val === q) {
    return root;
  }

  let left = findTheRoot(root.left, p, q);
  let right = findTheRoot(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
}
