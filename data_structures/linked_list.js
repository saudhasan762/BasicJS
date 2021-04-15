class Node {

    constructor(element){
        this.element = element;
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    
    //function to add a element to a linked list
    add(element) {
        let node = new Node(element);

        let current;

        if(this.head == null)
            this.head = node;
        else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }

    //function to remove a particular node from the linked list
    removeNode (element) {
        let current = this.head;
        let prev = null;

        while (current != null) {
            if (current.element === element){
                if (prev == null){
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    //function to add a element to a particular index
    addAtIndex (element, index){
        if( index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            let node = new Node(element);
            let curr, prev;

            curr = this.head;

            if (index == 0){
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let iter = 0;

                while (iter < index) {
                    iter++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    //function to search a element in the linked list
    searchNode(element) {
        var current = this.head;
 
        while (current != null) {
            if (current.element === element)
                return true;
            current = current.next;
        }
        return false;
    }

    //function to get the size of the linked list
    getSize (){
        return this.size;
    }

    //function to display the elements in the linked list
    display (){
        let curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.element + " ->   ";
            curr = curr.next;
        } 
        console.log(str);
    }
}

let list = new LinkedList();

const prompt = require('prompt-sync')();
let number = prompt('Enter the number of values: ');

for(let i = 0; i < number ;i++){
    let value = prompt('Emter the Value: ');
    list.add(value);
}
list.display();
let removeelement = prompt('Enter element to remove: ')
list.removeNode(removeelement);
list.display();

let addElement = prompt('Enter the element you want to add to a index: ');
let index = prompt('Enter the index to be inserted: ');
list.addAtIndex(addElement, index);
list.display();


let searchElement  = prompt('Enter element to search: ');
let get = list.searchNode(searchElement);
if(get){
    console.log("Element Found")
} else
    console.log("Not Found");
list.display();

