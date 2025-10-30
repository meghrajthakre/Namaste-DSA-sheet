// 33 There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (arr, target) {
    // Initialize two pointers for binary search
    let left = 0;
    let right = arr.length - 1;

    // Continue searching while left pointer is less than or equal to right
    while (left <= right) {

        // Find the middle index
        let mid = Math.floor((left + right) / 2);

        // 🎯 If target found at mid, return its index
        if (arr[mid] === target) {
            return mid;
        }

        // 🧩 Check which half of the array is sorted

        // If left part is sorted
        if (arr[left] <= arr[mid]) {

            // If target lies within the sorted left half
            if (target >= arr[left] && target < arr[mid]) {
                // Move search to the left half
                right = mid - 1;
            } 
            else {
                // Otherwise, move to the right half
                left = mid + 1;
            }
        } 
        
        // Else, the right part is sorted
        else {
            // If target lies within the sorted right half
            if (target > arr[mid] && target <= arr[right]) {
                // Move search to the right half
                left = mid + 1;
            } 
            else {
                // Otherwise, move to the left half
                right = mid - 1;
            }
        }
    }

    // ❌ Target not found
    return -1;
};
