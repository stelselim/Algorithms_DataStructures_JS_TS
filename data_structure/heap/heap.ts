
class MaxHeap {
    items: number[];

    constructor() {
        this.items = [];
    }

    add(item: number) {
        if (this.items.length === 0) {
            this.items.push(item);
            return;
        }
        this.items.push(item);
        this.heapifyUp();
    }

    poll() {
        // If heap is empty, return null
        if (this.items.length === 0) {
            return null;
        }
        const data = this.items[0];
        this.items[0] = this.items.pop()!;
        this.heapifyDown();
        return data;
    }


    hasParent(index: number) {
        return index > 0;
    }

    hasLeftChild(index: number) {
        return index * 2 + 1 < this.items.length;
    }
    hasRighttChild(index: number) {
        return index * 2 + 2 < this.items.length;
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let biggerChildIndex = index * 2 + 1;
            // Left Child < Right Child
            if (this.hasRighttChild(index) && this.items[index * 2 + 1] < this.items[index * 2 + 2]) {
                biggerChildIndex = index * 2 + 2;
            }

            if (this.items[biggerChildIndex] < this.items[index]) {
                break;
            } else {
                this.swap(biggerChildIndex, index);
            }
            index = biggerChildIndex;
        }
    }
    parentIndex(index: number) {
        return Math.floor((index - 1) / 2);
    }

    heapifyUp() {
        let index = this.items.length - 1;
        while (this.hasParent(index) && this.items[this.parentIndex(index)] < this.items[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    swap(indexOne: number, indexTwo: number) {
        const tmp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = tmp;
    }
}

class MinHeap {
    items: number[];
    constructor() {
        this.items = [];
    }

    add(data: number) {
        if (this.items.length === 0) {
            this.items.push(data);
            return;
        }
        this.items.push(data);
        this.heapifyUp();
    }
    poll() {
        if (this.items.length === 0) {
            return null;
        }
        const data = this.items[0];
        this.items[0] = this.items.pop()!;
        this.heapifyDown();
        return data;
    }
    hasParent(index: number) {
        return index > 0;
    }
    hasLeftChild(index: number) {
        return index * 2 + 1 <= this.items.length - 1
    }
    hasRightChild(index: number) {
        return index * 2 + 2 <= this.items.length - 1
    }

    heapifyUp() {
        let index = this.items.length - 1;
        while (this.hasParent(index) && this.items[Math.floor((index - 1) / 2)] > this.items[index]) {
            this.swap(index, Math.floor((index - 1) / 2))
            index = Math.floor((index - 1) / 2);
        }
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = index * 2 + 1;
            if (this.hasRightChild(index) && this.items[index * 2 + 2] < this.items[index * 2 + 1]) {
                smallerChildIndex = index * 2 + 2;
            }

            if (smallerChildIndex > this.items[index]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;

        }
    }

    swap(indexOne: number, indexTwo: number) {
        const tmp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = tmp;
    }
}

// Try
const maxHeap = new MaxHeap();
maxHeap.add(2);
maxHeap.add(12);
maxHeap.add(25);
maxHeap.add(55);
maxHeap.add(155);
maxHeap.add(45);
maxHeap.add(5);
maxHeap.add(75);
maxHeap.add(35);
maxHeap.add(15);
maxHeap.add(3);
maxHeap.poll();
maxHeap.poll();
maxHeap.poll();

// console.log(maxHeap.items);


const minHeap = new MinHeap();
minHeap.add(2);
minHeap.add(12);
minHeap.add(25);
minHeap.add(55);
minHeap.add(155);
minHeap.add(45);
minHeap.add(5);
minHeap.add(75);
minHeap.add(35);
minHeap.add(15);
minHeap.add(3);
minHeap.poll();
minHeap.poll();
// minHeap.poll();

console.log(minHeap.items);