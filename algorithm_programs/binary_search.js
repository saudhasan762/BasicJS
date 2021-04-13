function search(arr, x) {
    let start=0, end=arr.length-1;
          
    while (start<=end){
  
        let mid=Math.floor((start + end)/2);
   
        if (arr[mid] == x) return true;
        else if (arr[mid] < x) 
             start = mid + 1;
        else
             end = mid - 1;
    }
   
    return false;
}

let arr = [1, 2, 4, 6, 7, 8, 9];
const prompt = require('prompt-sync')();
let number  = prompt('Enter the number you want to search: ');
function binarySearch(){
    if(search(arr,number))
        console.log("Number found");
    else
        console.log("Not found");
}
binarySearch();