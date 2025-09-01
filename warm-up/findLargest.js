// write a fuction that returns largest number  in an array ;
let arr = [1,2,3,4,5,6,7,8,9,50]
function findLargest(a) {
    let largest = a[0];
    for (let i = 0; i < a.length; i++){
        if (largest < a[i]) {
            largest = a[i]
        }
    }
    return largest
}

let res = findLargest(arr);
console.log(res)