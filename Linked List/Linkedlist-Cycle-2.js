/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let fastNode = head;
  let slowNode = head;
  let meet = false;

  while (fastNode !== null && fastNode.next !== null) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;
    if (fastNode === slowNode) {
      meet = true;
      break;
    }
  }
  if (meet) {
    slowNode = head;

    while (slowNode !== fastNode) {
      slowNode = slowNode.next;
      fastNode = fastNode.next;
    }
    return slowNode;
  } else {
    return null;
  }
};

// Here I use Floyd's cycle detection algorithm (Tortoise and hare)
