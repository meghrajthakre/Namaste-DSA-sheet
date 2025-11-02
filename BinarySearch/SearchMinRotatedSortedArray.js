// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.


// Function to find the minimum element in a rotated sorted array
var findMin = function (arr) {
    // Initialize two pointers
    let left = 0;
    let right = arr.length - 1;

    // Binary search loop
    while (left <= right) {

        // Case 1: If the array (or subarray) is already sorted,
        // then the leftmost element is the smallest.
        if (arr[left] <= arr[right]) {
            return arr[left];
        }

        // Find the middle index
        let mid = left + Math.floor((right - left) / 2);

        // Case 2: If the middle element is smaller than its previous element,
        // then it is the point of rotation (smallest element).
        if (arr[mid - 1] > arr[mid]) {
            return arr[mid];
        }

        // Case 3: If the left part is unsorted, 
        // then the minimum lies in the left half.
        else if (arr[left] > arr[mid]) {
            right = mid - 1;
        }

        // Case 4: Otherwise, the minimum lies in the right half.
        else {
            left = mid + 1;
        }
    }
};

console.log(findMin([4,5,6,7,0,1,2])); // Output: 0
console.log(findMin([3,4,5,1,2]));     // Output: 1
console.log(findMin([11,13,15,17]));   // Output: 11
