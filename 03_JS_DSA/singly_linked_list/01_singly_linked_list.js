class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  traverse() {
    let current = this.head;
    let arr = [];
    while(current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log("List is: ", arr);
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  
  shift() {
    if(!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    current.next = null;
    this.length -= 1;
    if(this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  get(index) {
    if(index < 0 || index > this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }

  remove(index) {
    if(index < 0 || index > this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length) return this.pop();
    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length -= 1;
    return removed;

  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode;
    let previousNode = null;
    for(let i=0; i<this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }

} // End of class

let list = new SinglyLinkedList();

// Push elements
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.traverse();

// Pop elements
// console.log("Poped element: ", list.pop());
// list.traverse();
// console.log("Poped element: ", list.pop());
// console.log("Poped element: ", list.pop());
// list.traverse();
// console.log("Poped element: ", list.pop());

// Unshift - Add element at the start of the list
// list.unshift(50);
// list.unshift(25);
// list.traverse();

// Shift - Remove element from the start
// console.log(list.shift());
// list.traverse();
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// list.traverse();

// Get - Retrieve node by its position
// console.log(list.get(1));
// console.log(list.get(2));
// console.log(list.get(3));

// Set - change the value at given index
// list.set(2,150);
// list.traverse();

// Insert - insert at given position
// console.log(list.insert(0,50));
// console.log(list.insert(1,150));
// console.log(list.insert(2,175));
// list.traverse();

// removed - remove a node at specific index
// console.log(list.remove(1));
// list.traverse();

// Reverse a linked list
list.reverse();
list.traverse();
