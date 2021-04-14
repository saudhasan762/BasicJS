let utility = require('../utility')

let arr = ['apple', 'banana', 'grapes', 'mango', 'oranges'];
const prompt = require('prompt-sync')();
let number  = prompt('Enter the string you want to search: ');
function binarySearch(){
    if(utility.search(arr, number))
        console.log("String found");
    else
        console.log("String not found");
}
binarySearch();
