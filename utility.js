module.exports = {
    search(arr, x) {
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
}