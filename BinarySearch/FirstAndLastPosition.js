//34. Find First and Last Position of Element in Sorted Array
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// first aproach 1
var searchRange = function (arr, target) {
    let l = 0;                    // Left pointer for first occurrence search
    let r = arr.length - 1;       // Right pointer for first occurrence search
    let ans = [-1, -1];           // Initialize answer array with [-1, -1]

    // --- Find first occurrence of target ---
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);  // Midpoint calculation (floor ensures we lean left)
        if (arr[m] < target) {
            l = m + 1;    // Target is on the right side
        } else {
            r = m;        // Target is at mid or on the left side, keep searching left
        }
    }
    // After loop, l == r, check if arr[l] is the target
    if (arr[l] === target) ans[0] = l;

    // Reset pointers for last occurrence search
    l = 0;
    r = arr.length - 1;

    // --- Find last occurrence of target ---
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);   // Midpoint calculation (ceil ensures we lean right)
        if (arr[m] > target) {
            r = m - 1;    // Target is on the left side
        } else {
            l = m;        // Target is at mid or on the right side, keep searching right
        }
    }
    // After loop, l == r, check if arr[l] is the target
    if (arr[l] === target) ans[1] = l;

    return ans;  // Return [first occurrence, last occurrence]
};





// second aproach 2
// Function to find the first and last positions of a target in a sorted array
let l = 0;                    // Left pointer for first occurrence search
let r = arr.length - 1;       // Right pointer for first occurrence search
let ans = [-1, -1];           // Initialize answer array with [-1, -1]

// --- Find first occurrence of target ---
while (l <= r) {
    let m = l + Math.floor((r - l) / 2);  // Midpoint calculation
    if (arr[m] === target) {
        ans[0] = m;   // Found target, update first occurrence
        r = m - 1;    // Move left to check if there is an earlier occurrence
    } else if (arr[m] < target) {
        l = m + 1;    // Target is on the right side
    } else {
        r = m - 1;    // Target is on the left side
    }
}

// Reset pointers for second search
l = 0;
r = arr.length - 1;

// --- Find last occurrence of target ---
while (l <= r) {
    let m = l + Math.floor((r - l) / 2);  // Midpoint calculation
    if (arr[m] === target) {
        ans[1] = m;   // Found target, update last occurrence
        l = m + 1;    // Move right to check if there is a later occurrence
    } else if (arr[m] < target) {
        l = m + 1;    // Target is on the right side
    } else {
        r = m - 1;    // Target is on the left side
    }
}

return ans;  // Return array containing [first occurrence, last occurrence]


