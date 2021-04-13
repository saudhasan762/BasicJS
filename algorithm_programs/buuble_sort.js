function bubbleSort(arr) {
    let len = arr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return arr;
 }

 function sort() {
    let arr = [55, 46, 78, 92, 12, 45, 67, 20];
    let newarr = bubbleSort(arr);
    console.log(newarr);
}
sort();