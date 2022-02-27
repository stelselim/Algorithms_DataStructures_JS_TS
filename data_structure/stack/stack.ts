class StackNode<T> {
    data: T;
    next: StackNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Stack<T> {
    top: StackNode<T> | null;

    constructor() {
        this.top = null;
    }
    isEmpty() {
        return this.top === null;
    }

    push(data: T) {
        const node = new StackNode(data);
        node.next = this.top;
        this.top = node;
    }
    peek() {
        return this.top?.data;
    }
    pop() {
        const data = this.top?.data;
        this.top = this.top?.next;
        return data;
    }
    print() {
        let current = this.top;
        while (current!==null) {
            console.log(current.data);
            current = current.next;
        }
    }

}

const newStack = new Stack();
newStack.push(123)
newStack.push(34)
newStack.push(102)
newStack.push(205)
newStack.push(124)

console.log("-----PRINT-----")
newStack.print()
console.log("----PEEK------")
console.log(newStack.peek())
newStack.pop()
console.log("-----PRINT-----")
newStack.print()