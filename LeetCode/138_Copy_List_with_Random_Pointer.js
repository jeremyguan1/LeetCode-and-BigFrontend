/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let obj = new Map();
  let current = head;
  while (current) {
    let copy = new Node(current.val);
    obj.set(current, copy);
    current = current.next;
  }
  current = head;

  while (current) {
    let copy = obj.get(current);
    copy.next = obj.get(current.next) || null;
    copy.random = obj.get(current.random) || null;
    current = current.next;
  }
  return obj.get(head);
};
