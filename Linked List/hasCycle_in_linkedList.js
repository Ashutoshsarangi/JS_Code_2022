var hasCycle = function (head) {
  let fastNode = head;
  let slowNode = head;

  while (fastNode !== null && fastNode.next !== null) {
    fastNode = fastNode.next.next;
    slowNode = slowNode.next;

    if (fastNode === slowNode) {
      // We are traversing the same Linked List so Address would be similar
      return true;
    }
  }

  return false;
};
