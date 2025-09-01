// write a function that returns smallest  number  in an array ;
let arr = [122, 1, 2, 3, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 50]
function findSmallest(arr) {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i]
        }
    }
    return smallest
}

let res = findSmallest(arr);
console.log(res)