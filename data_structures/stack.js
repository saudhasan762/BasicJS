class Stack {
    constructor () {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.stack.length > 0){
            this.stack.pop();
        } else {
            console.log("Stack is empty");
        }
    }

    display() {
        console.log(this.stack);
    }

    getSize() {
        console.log("Size of the Stack: ",this.stack.length);
    }
}
let obj = new Stack();

const prompt = require('prompt-sync')();
let number = prompt('Enter the number of values: ');
for (let i = 0; i < number; i++) {
    let value = prompt('Enter the value: ');
    //console.log(Number.isSafeInteger(value));
    obj.push(value);
}

obj.display();

obj.pop();
obj.display();
obj.getSize();


