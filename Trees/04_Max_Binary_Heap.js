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
} // End of class MaxBinarHeap


// Insert into Max Binary Heap
const heap = new MaxBinaryHeap();
console.log("Initial Heap: ", heap.values);
heap.insert(55);
console.log("After insert 55: ", heap.values);
heap.insert(11);
console.log("After insert 11: ", heap.values);