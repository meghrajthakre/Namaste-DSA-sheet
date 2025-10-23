// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 
var nextGreaterElement = function (nums1, arr) {

    let map = {};     // stores each number's next greater element
    let stack = [];   // stack to keep track of decreasing numbers
    let n = arr.length;

    // Step 1️⃣: Start from the last element
    // Last element will never have any number after it, so its NGE = -1
    stack.push(arr[n - 1]);
    map[arr[n - 1]] = -1;

    // Step 2️⃣: Traverse from right → left
    for (let i = n - 2; i >= 0; i--) {

        let top = stack[stack.length - 1];  // element at top of stack

        // 👉 Case 1: If current number < top of stack → top is its next greater
        if (arr[i] < top) {
            map[arr[i]] = top;
        } 

        // 👉 Case 2: If current number >= top → pop until we find a greater number
        else {
            while (stack.length) {
                // remove smaller elements (they can't be NGE for anyone to the left)
                if (stack[stack.length - 1] < arr[i]) {
                    stack.pop();
                } 
                // found next greater element
                else {
                    map[arr[i]] = stack[stack.length - 1];
                    break;
                }
            }

            // if stack becomes empty → no greater number found
            if (stack.length == 0) {
                map[arr[i]] = -1;
            }
        }

        // finally push current element for next iterations
        stack.push(arr[i]);
    }

    // Step 3️⃣: Build result for nums1 from the precomputed map
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        result.push(map[nums1[i]]);
    }

    return result;
};
