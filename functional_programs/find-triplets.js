arr = [0, -1, 2, -3, 1];
  
function findTriplets(arr) {
    let found = false;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log("Triplets are: "+arr[i]+" "+arr[j]+" "+arr[k]);
                    found = true;                   
                }
            }
        }
        // If no triplet with 0 sum found in array
        if(found === false) {
            document.write(" not exist ");
        }
    }
}
findTriplets(arr);