export {};

class LinkedNode<T> {
  data: T | null;
  next: LinkedNode<T> | null;
  prev: LinkedNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  head: LinkedNode<T>;

  constructor() {
    this.head = null;
  }

  append(data: T) {
    if (this.head === null) {
      this.head = new LinkedNode(data);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    let newNode = new LinkedNode(data);
    newNode.prev = current;
    current.next = newNode;
  }
  prepend(data: T) {
    let newHead = new LinkedNode(data);
    if (this.head !== null) {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    } else {
      this.head = newHead;
    }
  }

  print() {
    let current = this.head;
    let counter = 0;
    console.log('Normal');
    while (current !== null) {
      console.log(`Node: ${counter}, Value: ${current.data}`);
      counter++;
      current = current.next;
    }
  }

  traverseAndBack() {
    let current = this.head;
    let counter = 0;
    console.log('Traverse Back');
    while (current.next !== null) {
      counter++;
      current = current.next;
    }
    while (current !== null) {
      console.log(`Node: ${counter}, Value: ${current.data}`);
      counter--;
      current = current.prev;
    }
  }
}

// Try
const list = new DoublyLinkedList();
list.prepend(22);
list.prepend(122);
list.prepend(52);
list.append(62);
list.append(5);
list.append(5);
list.print();
list.traverseAndBack();
