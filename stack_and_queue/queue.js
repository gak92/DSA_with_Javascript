class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this.size;
  }

  dequeue() {
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return temp.val;
  }
}

let q = new Queue();
console.log("Enqueue and element into the queue (size of queue): ", q.enqueue(11));
console.log("Enqueue and element into the queue (size of queue): ", q.enqueue(19));
console.log("Enqueue and element into the queue (size of queue): ", q.enqueue(21));

console.log("Dequeue an element: ", q.dequeue());
console.log("Dequeue an element: ", q.dequeue());
console.log("Dequeue an element: ", q.dequeue());
console.log("Dequeue an element: ", q.dequeue());
