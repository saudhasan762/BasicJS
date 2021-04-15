class Queue {
    constructor() {
        this.queue  = []
    }

    //function to add a element to a queue
    enqueue(element) {
        this.queue.push(element);
    }

    //function to remove a element form the queue
    dequeue() {
        if(this.queue.length == 0)
            console.log("Queue is Empty");
        return this.queue.shift();
    }

    //function to display the elements in the queue
    display() {
        return this.queue;
    }

    //function to get the size of the queue
    getSize() {
        return this.queue.length;
    }
}

let obj = new Queue();

const prompt = require('prompt-sync')();
let number = prompt('Enter the number of values: ');
for (let i = 0; i < number; i++) {
    let value = prompt('Enter the value: ');
    obj.enqueue(value);
}

console.log("Queue before: ",obj.display());
console.log("Size before dequeue: ",obj.getSize());
obj.dequeue();
obj.dequeue();
console.log("Queue after dequeue: ",obj.display());
console.log("Size after dequeue: ",obj.getSize());
