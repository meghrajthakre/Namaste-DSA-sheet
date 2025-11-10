// 1 Problem Statement:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Examples:
// Example 1:
// Input: nums = [2,7,11,15], target = 9

// Output: [0,1]

// 1st aporach o(n2) s 0(1)

var twoSum = function(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j];
            if (sum === target) {
                return [i, j];
            }
        }
    }
}     
// second aproach t o(n) s O(n)
var twoSum = function (nums, target) {
    let n = nums.length;
    let map = {}
    for (let i = 0; i < n; i++) {
        map[nums[i]] = i
    }
    for (let i = 0; i < n; i++) {
        let pair = target - nums[i]
        if(map[pair] && map[pair] != i){
            return [i , map[pair]]
        }
    }
};