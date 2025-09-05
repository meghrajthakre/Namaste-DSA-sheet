
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.


var removeElement = function (nums, val) {
    let x = 0; // pointer for the "new array" without val
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i]; // assign nums[i] to nums[x]
            x++; // move forward the new array index
        }
    }
    return x; // new length of array without val
};

let arr = [3,2,2,3];
let len = removeElement(arr, 3);

console.log(len);   // 2
console.log(arr);   // [2, 2, ...]  (rest can be ignored)