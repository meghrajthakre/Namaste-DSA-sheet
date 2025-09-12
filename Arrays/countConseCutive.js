// Given a binary array nums, return the maximum number of consecutive 1's in the array.


var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;  // current streak of 1s
    let maxCount = 0;      // maximum streak so far

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }

    // Check at the end in case array ends with 1s
    return Math.max(maxCount, currentCount);
};
