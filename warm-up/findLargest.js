// write a fuction that returns largest number  in an array ;
let arr = [1,2,3,4,5,6,7,8,9,50]
function findLargest(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    return largest
}

let res = findLargest(arr);
console.log(res)