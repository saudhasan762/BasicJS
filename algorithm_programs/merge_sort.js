const mergeSort = (arr) => {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const sorted_left = mergeSort(left);
    const sorted_right = mergeSort(right);
    return mergeArrays(sorted_left, sorted_right);
  }

const mergeArrays = (left, right) => {
    const newarr = [];
    while (left.length && right.length) {
      newarr.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    //if we still have values, let's add them at the end of `c`
    while (left.length) {
      newarr.push(left.shift())
    }
    while (right.length) {
      newarr.push(right.shift())
    }
  
    return newarr;
}

let list = ['orange', 'papaya', 'banana','mango', 'apple', 'grapes'];
let newarr = mergeSort(list);
console.log(newarr);