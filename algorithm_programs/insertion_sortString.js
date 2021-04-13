function insertionSort(arr) {
    let n = arr.length;
        for (let i = 1; i < n; i++) {
            let current = arr[i];
            let j = i-1; 
            while ((j >= 0) && (arr[j] > current)) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
    return arr;
}

function sort() {
    let arr = ['orange', 'papaya', 'banana','mango', 'apple', 'grapes'];
    let newarr = insertionSort(arr);
    console.log(newarr);
}
sort();