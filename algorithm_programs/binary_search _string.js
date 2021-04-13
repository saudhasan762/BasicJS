function search(arr, x) {
    let start=0, end=arr.length-1;
          
    while (start<=end){
  
        let mid=Math.floor((start + end)/2);
        let check = arr[mid];

        if (check == x) return true;
        else if (check > x) 
             end = mid - 1;
        else
             start = mid + 1;
    }

    return false;
}

let arr = ['apple', 'banana', 'grapes', 'mango', 'oranges'];
const prompt = require('prompt-sync')();
let number  = prompt('Enter the string you want to search: ');
function binarySearch(){
    if(search(arr, number))
        console.log("String found");
    else
        console.log("String not found");
}
binarySearch();