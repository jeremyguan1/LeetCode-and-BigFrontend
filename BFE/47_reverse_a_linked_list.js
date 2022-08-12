/**
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node}
 */
const reverseLinkedList = (list) => {
  // your code

  let prev = null;
  let next = null;
  while (list) {
    next = list.next;
    list.next = prev;
    prev = list;
    list = next;
  }

  return prev;
};
