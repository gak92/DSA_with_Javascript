class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    
    return ++this.size;
  }

  pop() {
    if(!this.first) return null;
    let temp = this.first;
    if(this.first === this.last) {
      this.last = null;
    }
    this.first = temp.next;
    this.size -=1;
    return temp.val;
  }

  top() {
    if(!this.first) {
      return null;
    }
    else {
      return this.first.val;
    }
  }
}

let s = new Stack();
console.log("Pushing an element into stack size is: ", s.push(1));
console.log("Pushing an element into stack size is: ", s.push(2));
console.log("Pushing an element into stack size is: ", s.push(3));
console.log("Element at top of the stack --> ", s.top());

console.log("Pop an element from the stack: ", s.pop());
console.log("Element at top of the stack --> ", s.top());
