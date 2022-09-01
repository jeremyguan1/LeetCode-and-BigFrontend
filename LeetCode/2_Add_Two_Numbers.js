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
  let carry = 0;
  let sum = new ListNode();
  let head = sum;
  while (l1 || l2) {
    let currSum = 0 + carry;
    carry = 0;
    if (l1 && l2) {
      currSum += l1.val + l2.val;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1) {
      currSum += l1.val;
      l1 = l1.next;
    } else if (l2) {
      currSum += l2.val;
      l2 = l2.next;
    }

    if (currSum > 9) {
      carry = Math.floor(currSum / 10);
    }
    head.next = new ListNode(currSum % 10);
    head = head.next;
  }

  if (carry > 0) {
    head.next = new ListNode(carry % 10);
    head = head.next;
  }

  return sum.next;
};
