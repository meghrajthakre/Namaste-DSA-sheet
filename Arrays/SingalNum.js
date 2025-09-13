// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
    let hash = {};   // frequency count store karne ke liye object

    // 1st loop → har element kitni baar aaya uski count banao
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;   // agar pehli baar mila to count = 1
        }
        else {
            hash[nums[i]]++;     // agar pehle se hai to count badhao
        }
    }

    // 2nd loop → jiski count 1 hai wahi single number hai
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i];
        }
    }
};




var singleNumber = function(nums) {
    let xor = 0;

    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];   // bas itna hi likhna hai
    }

    return xor;   // return variable ka sahi naam
}

// 🔹 XOR property (important)

// a ^ a = 0 (same numbers cancel out)

// a ^ 0 = a (XOR with 0 gives the number itself)

// XOR is commutative and associative (order doesn’t matter).