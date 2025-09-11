// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

  /**
 * @param {number[]} nums1
 * @param {number} m  -> number of valid elements in nums1
 * @param {number[]} nums2
 * @param {number} n  -> number of elements in nums2
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    // Start from the end
    let p1 = m - 1;          // pointer for nums1
    let p2 = n - 1;          // pointer for nums2
    let i = m + n - 1;       // fill position in nums1

    // Merge until nums2 is exhausted
    while (p2 >= 0) {
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
        i--;
    }
};


/**
 * Merge Sorted Array (LeetCode 88)
 * nums1 has size m + n (first m elements valid, rest 0s).
 * nums2 has size n.
 * We merge nums2 into nums1 in sorted order.
 */
var merge = function(nums1, m, nums2, n) { 
    let p1 = m - 1;        // pointer at last valid element of nums1
    let p2 = n - 1;        // pointer at last element of nums2

    // Fill nums1 from the end
    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;   // if nums2 is finished, stop

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            // if nums1 element is bigger, place it at the end
            nums1[i] = nums1[p1];
            p1--;
        } else {
            // else take element from nums2
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};
