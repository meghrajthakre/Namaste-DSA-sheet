// 15. 3Sum

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            twoSum(nums, i, ans);
        }
    }
    return ans;
};
var twoSum = function(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x];
        if (sum > 0) {
            j--;
        } else if (sum < 0) {
            i++;
        } else {
            ans.push([arr[i], arr[j], arr[x]]);
            i++;
            j--;
            // Skip duplicates for the second element
            while (i < j && arr[i] === arr[i - 1]) {
                i++;
            }
        }
    }
};