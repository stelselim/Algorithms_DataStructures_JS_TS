class QueueNode {
    priority: number;
    element: any;

    constructor(element: any, priority: number) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    items: QueueNode[]

    constructor() {
        this.items = [];
    }

    enqueue(element: any, priority: number) {
        let newElement = new QueueNode(element, priority);
        let contain = false;
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > newElement.priority) {
                this.items.splice(i, 0, newElement);
                contain = true;
                break;
            }
        }

        if (!contain) {
            this.items.push(newElement);
        }
    }

    dequeue() {
        if (this.items === []) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items === [];
    }

}

// Try
const priorityQueue = new PriorityQueue();

// adding elements to the queue
priorityQueue.enqueue("Sumit", 2);
priorityQueue.enqueue("Gourav", 1);
priorityQueue.enqueue("Piyush", 1);
priorityQueue.enqueue("Sunny", 2);
priorityQueue.enqueue("Sheru", 3);

console.log(priorityQueue.items);