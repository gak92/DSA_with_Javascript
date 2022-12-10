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

  bfs() {
    let q = [];
    let data = [];
    let node = this.root;
    q.push(node);

    while(q.length) {
      node = q.shift();
      data.push(node.val);

      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }

    return data;
  } // End of bfs method

} // End of class BST


// Create BST
let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

//          10
//    6           15
//  3   8             20

// BFS Traverse the Tree
// BFS = [10, 6, 15, 3, 8, 20]
console.log("Breadth First Traversal: ", bst.bfs());
