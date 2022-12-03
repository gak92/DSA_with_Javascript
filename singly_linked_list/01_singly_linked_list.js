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

} // End of class

let list = new SinglyLinkedList();

// Push elements
list.push(100);
list.push(200);
list.push(300);
list.traverse();

// Pop elements
console.log("Poped element: ", list.pop());
list.traverse();
console.log("Poped element: ", list.pop());
console.log("Poped element: ", list.pop());
list.traverse();
console.log("Poped element: ", list.pop());





