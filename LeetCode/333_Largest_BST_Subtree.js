var largestBSTSubtree = function (root) {
  if (!root) {
    return 0;
  }

  let maxCount = 0;
  var findNodes = function (root) {
    if (!root) return [0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    const [lcount, lmin, lmax] = findNodes(root.left);
    const [rcount, rmin, rmax] = findNodes(root.right);

    if (root.val <= lmax || root.val >= rmin || lcount === -1 || rcount === -1)
      return [-1, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    let currentCount = lcount + rcount + 1;
    maxCount = Math.max(currentCount, maxCount);
    return [currentCount, Math.min(lmin, root.val), Math.max(root.val, rmax)];
  };

  findNodes(root);
  return maxCount;
};
