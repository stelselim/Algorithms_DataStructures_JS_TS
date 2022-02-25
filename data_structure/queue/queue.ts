class Queue{
    collection: Number[];

    isEmpty(){
        return this.collection.length===0
    }

    enqueue(data:Number){
        this.collection.push(data);
    }

    dequeue(){
        return this.collection.shift() ?? null;
    }

    peek(){
        return this.collection[0];
    }
}