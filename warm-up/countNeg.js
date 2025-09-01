// write a function that return the count of negatives number in an array ;
let arr = [1,-2,-5,-3,-5,4,-2,-5]
function countNegative() {
    let count =0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count++
        }
    }
    return count
}

let res = countNegative(arr);
console.log(res)