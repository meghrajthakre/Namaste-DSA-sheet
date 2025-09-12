// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array


var moveZeroes = function(nums) {
    let x = 0;  // position for next non-zero element

    // Step 1: Move non-zero elements to front
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    // Step 2: Fill the rest with 0s
    for (let i = x; i < nums.length; i++) {
        nums[i] = 0;
    }
};
