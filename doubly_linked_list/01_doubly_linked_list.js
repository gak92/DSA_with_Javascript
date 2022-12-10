class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  traverse() {
    let arr = [];
    let currentNode = this.head;
    for(let i=0; i<this.length; i++) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log("Original Order: ", arr);

    let rev = [];
    let currentNode2 = this.tail;
    for(let i=0; i<this.length; i++) {
      rev.push(currentNode2.val);
      currentNode2 = currentNode2.prev;
    }
    console.log("Reverse Order: ", rev);
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let poppedNode = this.tail;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length -= 1;
    return poppedNode;
  }

  shift() {
    if(this.length === 0) return undefined;
    let oldHead = this.head;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if(index < 0 || index > this.length) return null;
    let count, current;
    if(index <= this.length / 2) {
      count = 0;
      current = this.head;
      while(count !== index) {
        current = current.next;
        count += 1;
      }
    }
    else {
      count = this.length - 1;
      current = this.tail;
      while(count !== index) {
        current = current.prev;
        count -= 1;
      }
    }
    // return current.val;
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    newNode.next = afterNode;

    this.length += 1;
    return true;
  }

} // End of class

let list = new DoublyLinkedList();

// Push an element
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.traverse();

// Pop an element
// console.log(list.pop());
// list.traverse();

// Shift an element
// console.log(list.shift());
// list.traverse();

// Unshift an element
// list.unshift(50);
// list.traverse();

// Get an element
// console.log(list.get(-1));
// console.log(list.get(11));
// console.log(list.get(0));
// console.log(list.get(4));

// Set an element
// list.set(2,999);
// list.traverse();

// Insert an element
list.insert(0, 141);
list.traverse();