// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 
var nextGreaterElements = function (nums) {
    // Step 1: Make array circular (repeat it twice)
    let arr = [...nums, ...nums];
    let n = arr.length;

    // Stack to keep track of next greater elements
    let stack = [];

    // Initialize answer array with -1
    let ans = Array(n).fill(-1);

    // Step 2: Start from last element (right to left)
    stack.push(arr[n - 1]);

    for (let i = n - 2; i >= 0; i--) {

        // Step 3: Remove smaller or equal elements from stack
        while (stack.length) {
            let top = stack[stack.length - 1];

            if (arr[i] < top) {
                // Found next greater
                ans[i] = top;
                break;
            } else {
                // Not greater, remove it
                stack.pop();
            }
        }

        // Step 4: Push current element to stack
        stack.push(arr[i]);
    }

    // Step 5: Return only first half (since array was doubled)
    return ans.slice(0, n / 2);
};
