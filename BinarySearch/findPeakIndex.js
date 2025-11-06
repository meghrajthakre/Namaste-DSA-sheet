// 852. Peak Index in a Mountain Array
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.


// Function to find the peak index in a mountain array
var peakIndexInMountainArray = function(arr) {
    // Initialize two pointers for binary search
    let l = 0;
    let r = arr.length - 1;

    // Continue searching while left pointer is less than right
    while (l < r) {
        // Find the middle index
        let m = l + Math.floor((r - l) / 2);

        // If the middle element is smaller than the next one,
        // it means we are in the increasing part of the mountain
        if (arr[m + 1] > arr[m]) {
            l = m + 1; // Move the left pointer to mid + 1
        } 
        // Otherwise, we are in the decreasing part
        else {
            r = m; // Move the right pointer to mid
        }
    }

    // When loop ends, 'l' (or 'r') points to the peak element
    return l;
};
