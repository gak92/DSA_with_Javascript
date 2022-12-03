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
}

let list = new SinglyLinkedList();
list.push(100);
list.push(200);
list.push(300);
list.traverse();


