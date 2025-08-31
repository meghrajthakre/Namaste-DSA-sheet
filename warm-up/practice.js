// write a function that searches for an element in an array and return the index if element is not present then return -1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 11) {
            console.log(i)
        }
    }
    return -1
}

let res = findIndex(arr);
console.log(res);
