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

  dfsPreOrder() {
    let data = [];
    let currentNode = this.root;

    function traverse(node) {
      data.push(node.val);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }

    traverse(currentNode);
    return data;
  }

  dfsPostOrder() {
    let data = [];
    let currentNode = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val);
    }

    traverse(currentNode);
    return data;
  }

  dfsInOrder() {
    let data = [];
    let currentNode = this.root;

    function traverse(node) {
      if(node.left) traverse(node.left);
      data.push(node.val);
      if(node.right) traverse(node.right);
    }

    traverse(currentNode);
    return data;
  }

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

// DFS PreOrder Traverse the Tree
// DFSPreOrder = [10, 6, 3, 8, 15, 20]
console.log("Depth First PreOrder Traversal: ", bst.dfsPreOrder());

// DFS PostOrder Traverse the Tree
// DFSPostOrder = [3, 8, 6, 20, 15, 10]
console.log("Depth First PostOrder Traversal: ", bst.dfsPostOrder());

// DFS InOrder Traverse the Tree
// DFSInOrder = [3, 6, 8, 10, 15, 20]
console.log("Depth First InOrder Traversal: ", bst.dfsInOrder());
