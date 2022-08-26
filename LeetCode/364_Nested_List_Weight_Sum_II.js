/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  let maxDepth = findMaxDepth(nestedList);
  return helper(nestedList, 1, maxDepth);
};

function helper(nestedList, depth, maxDepth) {
  let answer = 0;
  for (let nest of nestedList) {
    if (nest.isInteger()) {
      answer += nest.getInteger() * (maxDepth - depth + 1);
    } else {
      answer += helper(nest.getList(), depth + 1, maxDepth);
    }
  }
  return answer;
}

function findMaxDepth(nestedList) {
  let count = 1;

  for (let nest of nestedList) {
    if (!nest.isInteger() && nest.getList().length > 0) {
      count = Math.max(count, 1 + findMaxDepth(nest.getList()));
    }
  }
  return count;
}
