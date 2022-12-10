class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    else {
      let current = this.root;
      while(true) {
        if(val === current.val) return undefined;
        if(val < current.val) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
        else if(val > current.val) {
          if(current.right === null) {
            current.right = newNode;
            return this;
          }
          else {
            current = current.right;
          }
        }

      } // End of while
    } // End of first else

  } // End of insert method

  find(val) {
    if(this.root === null) return false;
    let current = this.root;
    let found = false;

    while(current && !found) {
      if(val < current.val) {
        current = current.left;
      }
      else if(val > current.val) {
        current = current.right;
      }
      else {
        found = true;
      }
    }

    return found;

  } // End of find method

} // End of class BST

let bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);

console.log(bst.find(1));
console.log(bst.find(15));
console.log(bst.find(10));
console.log(bst.find(19));
