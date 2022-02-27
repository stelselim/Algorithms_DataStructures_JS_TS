module.exports = {};
class node {
  data;
  next;

  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head;
  constructor() {
    this.head = null;
  }

  append(data) {
    if (this.head === null) {
      this.head = new node(data);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new node(data);
  }

  prepend(data) {
    let newHead = new node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  print() {
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      console.log(`Node: ${counter}, Value: ${current.data}`);
      current = current.next;
      counter++;
    }
  }
  deleteWithValue(data) {
    if (this.head === null) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current !== null) {
      counter++;
      current = current.next;
    }
    return counter;
  }
}

// Try
const list = new LinkedList();
list.append(12);
list.append(122);
list.append(112);
list.append(152);
list.prepend(55);
list.deleteWithValue(122);
list.deleteWithValue(55);

list.print();
console.log(list.search(152));
console.log(list.search(12));
console.log(list.search(112));
console.log(list.search(115));
console.log(list.size());
