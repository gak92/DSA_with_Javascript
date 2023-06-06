class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];

    while(idx > 0) {
      let parentIdx = Math.floor((idx-1) / 2);
      let parent = this.values[parentIdx];

      if(element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax(){
    const max = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];

    while(true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if(leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if(leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if(rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
          swap = rightChildIdx;
        }
      }

      if(swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    } // End of while loop
  } // End of sinkDown method

} // End of class MaxBinarHeap


// Insert into Max Binary Heap
const heap = new MaxBinaryHeap();
console.log("Initial Heap: ", heap.values);
heap.insert(55);
console.log("After insert 55: ", heap.values);
heap.insert(11);
console.log("After insert 11: ", heap.values);

// Extract Max value
console.log("Max value: ", heap.extractMax());
console.log("After extract max value: ", heap.values);
console.log("Max value: ", heap.extractMax());
console.log("After extract max value: ", heap.values);