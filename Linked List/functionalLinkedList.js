const linkedList = function (val) {
  this.value = val;
  this.next = null;
};

var MyLinkedList = function () {
  this.head = null;
  this.size = -1;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let currentNode = this.head;
  let i = 0;
  if (index < 0 || index > this.size) {
    return -1;
  }

  while (currentNode) {
    if (i === index) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
    i++;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new linkedList(val);

  if (!this.head) {
    this.head = newNode;
  } else {
    const nextAddress = this.head;
    newNode.next = nextAddress;
    this.head = newNode;
  }
  this.size += 1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new linkedList(val);

  if (!this.head) {
    this.head = newNode;
  } else {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.next === null) {
        currentNode.next = newNode;
        break;
      }
      currentNode = currentNode.next;
    }
  }
  this.size += 1;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index === 0) {
    this.addAtHead(val);
  } else if (this.size + 1 === index) {
    this.addAtTail(val);
  } else if (index < 0) {
    return null;
  } else {
    let currentNode = this.head;
    let previousNode = null;
    let tempIndex = 0;
    while (currentNode) {
      if (tempIndex === index) {
        if (val === 20) {
          console.log("I am inside ifff", index);
        }
        const newNode = new linkedList(val);
        if (val === 20) {
          console.log(newNode.value, previousNode.value, currentNode.value);
        }
        previousNode.next = newNode;
        newNode.next = currentNode;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      tempIndex += 1;
      if (val === 20) {
        console.log("I am inside", index, tempIndex);
      }
    }
    this.size += 1;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index > this.size || index < 0) {
    return null;
  }

  let currentNode = this.head;
  let previousNode = null;
  let i = 0;

  while (currentNode) {
    if (i === index) {
      if (previousNode === null) {
        this.head = this.head.next;
      } else {
        previousNode.next = currentNode.next;
      }

      break;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }
  }
  this.size -= 1;
};

//  Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
obj.addAtHead(55);
obj.addAtIndex(1, 90);
obj.addAtTail(51);
obj.addAtTail(91);
obj.addAtTail(12);
obj.addAtIndex(2, 72);
obj.addAtTail(17);
obj.addAtHead(82);
obj.deleteAtIndex(4);
obj.deleteAtIndex(7);
obj.deleteAtIndex(7);
obj.addAtIndex(5, 75);
obj.addAtTail(54);
console.log(obj.get(6));
console.log(obj.get(2));
obj.addAtHead(8);
obj.addAtTail(35);
obj.addAtTail(36);
console.log(obj.get(10));
obj.addAtTail(40);
obj.addAtTail(43);
obj.deleteAtIndex(12);
obj.deleteAtIndex(3);
obj.addAtHead(78);
obj.addAtTail(89);
obj.addAtIndex(3, 41);
console.log(obj.get(10));
obj.addAtTail(96);
obj.addAtIndex(5, 37);
obj.addAtHead(51);
obj.addAtTail(26);
obj.addAtIndex(16, 91);
console.log(obj.get(18));
obj.addAtHead(11);
obj.addAtTail(66);
console.log(JSON.stringify(obj.head), obj.size);
obj.addAtIndex(22, 20);
console.log(JSON.stringify(obj.head), obj.size);
// obj.addAtHead(44);
// console.log(JSON.stringify(obj.head), obj.size);

// obj.addAtIndex(17, 16);
// console.log(JSON.stringify(obj.head), obj.size);

// obj.addAtTail(95);

// obj.addAtHead(2);
// obj.addAtIndex(14, 2);
// obj.addAtTail(99);
// obj.addAtHead(51);
// obj.deleteAtIndex(1);
// console.log(obj.get(11));
// obj.addAtIndex(22, 99);
// console.log(obj.get(20));
// obj.addAtIndex(25, 42);
// obj.addAtTail(72);
// obj.addAtTail(45);
// console.log(obj.get(2));

// obj.deleteAtIndex(4);
// console.log(obj.get(32));
// obj.addAtHead(55);
// obj.addAtTail(84);
// obj.addAtIndex(32, 64);
// obj.addAtIndex(26, 14);
// obj.addAtIndex(30, 80);
// obj.addAtHead(88);
// obj.addAtTail(51);
// obj.addAtIndex(27, 71);

// obj.deleteAtIndex(15);
// obj.addAtHead(8);
// obj.addAtHead(60);
// obj.addAtTail(37);
// console.log(obj.get(25));
// obj.addAtTail(96);
// obj.addAtIndex(25, 53);
// obj.addAtHead(36);
// obj.deleteAtIndex(8);
// obj.addAtHead(85);
// obj.deleteAtIndex(42);

// console.log(obj.get(20));
// console.log(obj.get(34));
// obj.addAtTail(78);
// obj.addAtIndex(42, 76);
// console.log(obj.get(26));
// obj.deleteAtIndex(30);
// obj.deleteAtIndex(39);
// obj.addAtHead(27);
// obj.addAtHead(93);
// obj.addAtIndex(19, 75);
// console.log(obj.get(8));
// obj.addAtTail(24);
// obj.addAtHead(32);
// obj.addAtIndex(25, 98);
// console.log(obj.get(21));
// obj.addAtHead(95);
// obj.deleteAtIndex(18);
// obj.deleteAtIndex(45);
// obj.deleteAtIndex(24);
// obj.addAtHead(38);
// obj.addAtTail(8);
// console.log(obj.get(20));
// obj.addAtHead(83);
// obj.addAtTail(71);
// obj.addAtHead(78);
// obj.addAtHead(55);
// obj.deleteAtIndex(29);
// console.log(obj.get(11));
// obj.addAtHead(84);
