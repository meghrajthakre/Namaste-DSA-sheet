// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

function binarySearch(arr, target) {
    let left = 0;                 // starting index
    let right = arr.length - 1;   // ending index

    // loop until left and right cross each other
    while (left <= right) {
        // find the middle index
        let mid = Math.floor((left + right) / 2);

        // if middle element is the target → return its index
        if (arr[mid] === target) {
            return mid;
        }
        // if target is smaller than mid element → search in left half
        else if (target < arr[mid]) {
            right = mid - 1;
        }
        // if target is larger than mid element → search in right half
        else {
            left = mid + 1;
        }
    }

    // if not found, return -1
    return -1;
}

// Example usage:
let arr = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(arr, 7));  // Output: 3
console.log(binarySearch(arr, 2));  // Output: -1
