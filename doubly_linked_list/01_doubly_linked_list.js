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
}

let list = new DoublyLinkedList();

// Push an element
list.push(100);
list.push(200);
list.push(300);
list.push(400);
list.push(500);
list.traverse();

console.log(list.pop());
list.traverse();