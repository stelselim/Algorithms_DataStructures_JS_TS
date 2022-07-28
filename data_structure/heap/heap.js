class MaxHeap {
  items;
  size;
  constructor() {
    this.items = [];
    this.size = 0;
  }

  hasParent(index) {
    return index > 0;
  }

  hasLeftChild(index) {
    return index * 2 + 1 < size; // Check Last element index
  }

  hasRightChild(index) {
    return index * 2 + 2 < size;
  }

  // Adds to the last element & heapify up.
  add(value) {
    if (this.size < 1) {
      this.items = [value];
      this.size++;
      return;
    }
    this.items.push(value);
    this.size += 1;
    this.heapifyUp();
  }

  parent(index) {
    return this.items[Math.floor((index - 1) / 2)];
  }

  heapifyUp() {
    let elementIndex = this.size - 1;

    while (this.hasParent(elementIndex)) {
      if (this.parent(elementIndex) < this.items[elementIndex]) {
        let parentIndex = Math.floor((elementIndex - 1) / 2);
        let temp = this.items[parentIndex]; // Parent => to temp
        this.items[parentIndex] = this.items[elementIndex]; // PArent switch with current
        this.items[elementIndex] = temp;
        elementIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  poll(index) {
    let value = this.items[index];
    this.items[index] = this.items.pop();

    this.heapifyDown();

    return value;
  }

  heapifyDown() {
    let current = 0;

    while (this.hasLeftChild(current)) {
      // Find the max child
      let maxChild = this.items[current];
      

      // LEFT BIGGER
      if (
        this.hasRightChild(current) &&
        this.items[current * 2 + 1] > this.items[current * 2 + 2]
      ) {
      }
    }
  }
}

// =>
// => 2n+1 left
/**
 *      24
 *   3     14
 * 1  2   4  7
 */

///

const heap = new MaxHeap();
heap.add(2);
heap.add(4);
heap.add(2);
heap.add(3);
heap.add(1);
heap.add(24);
heap.add(14);
console.log(heap);
