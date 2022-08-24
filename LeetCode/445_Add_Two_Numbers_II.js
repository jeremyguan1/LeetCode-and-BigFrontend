/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l11 = reverseLinkList(l1);
  let l12 = reverseLinkList(l2);

  let head = null;
  let carry = 0;
  while (l11 !== null || l12 !== null) {
    let x1 = l11 ? l11.val : 0;
    let x2 = l12 ? l12.val : 0;

    let val = (carry + x1 + x2) % 10;
    carry = Math.floor((carry + x1 + x2) / 10);

    let nNode = new ListNode(val, head);
    head = nNode;
    l11 = l11 ? l11.next : null;
    l12 = l12 ? l12.next : null;
  }

  if (carry > 0) {
    let nNode = new ListNode(carry, head);
    head = nNode;
  }

  return head;
};

function reverseLinkList(list) {
  let prev = null;
  let head = list;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}
