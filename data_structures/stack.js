class Stack {
    constructor () {
        this.stack = [];
    }

    //function to push a element to a stack
    push(element) {
        this.stack.push(element);
    }

    //function to pop a element form a stack
    pop() {
        if (this.stack.length > 0){
            this.stack.pop();
        } else {
            console.log("Stack is empty");
        }
    }

    //function to display elements of stack
    display() {
        console.log(this.stack);
    }

    //function to get size of the stack
    getSize() {
        console.log("Size of the Stack: ",this.stack.length);
    }
}
let obj = new Stack();

const prompt = require('prompt-sync')();
let number = prompt('Enter the number of values: ');
for (let i = 0; i < number; i++) {
    let value = prompt('Enter the value: ');
    //if(Number.isSafeInteger(value))
    obj.push(value);
}
obj.display();

obj.pop();
obj.display();
obj.getSize();


