// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


var missingNumber = function(nums) {
    let n = nums.length;

    // Sum of numbers from 0 to n
    let totalSum = n * (n + 1) / 2;

    // Sum of given array
    let partialSum = 0;
    for (let i = 0; i < n; i++) {
        partialSum += nums[i];
    }

    // Difference gives missing number
    return totalSum - partialSum;
};
