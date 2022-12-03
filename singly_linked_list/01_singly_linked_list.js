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

} // End of class

let list = new SinglyLinkedList();

// Push elements
list.push(100);
list.push(200);
list.push(300);
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
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));



