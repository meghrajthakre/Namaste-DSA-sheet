var removeDuplicates = function (nums) {
    // 'x' will track the position of the last unique element
    let x = 0;

    // Loop through the array starting from index 0
    for (let i = 0; i < nums.length; i++) {
        // If the current element is greater than nums[x], 
        // it means nums[i] is a new unique element 
        // (since array is sorted, duplicates are always adjacent)
        if (nums[i] > nums[x]) {
            x++;              // Move pointer to the next position
            nums[x] = nums[i] // Place the unique element in the correct spot
        }
    }

    // The new length of the array without duplicates is (x + 1)
    return x + 1;
};
nums = [0,0,1,1,1,2,2,3,3,4]
let res = removeDuplicates(nums);

console.log(res);
