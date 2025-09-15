// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.


var isPowerOfTwo = function(n) {
    if (n == 1) return true;                 // base case: 1 → true (2^0)
    else if ((n < 1) || n % 2 !== 0) return false; 
    // agar negative ya 0 ya odd number hai to → false

    return isPowerOfTwo(n / 2);              // divide by 2 aur recursion
};



// Dry Run Example:
// Input: n = 16

// 16 % 2 == 0 → call isPowerOfTwo(8)

// 8 % 2 == 0 → call isPowerOfTwo(4)

// 4 % 2 == 0 → call isPowerOfTwo(2)

// 2 % 2 == 0 → call isPowerOfTwo(1)

// n == 1 → return true

// 👉 Output: true

// Input: n = 12

// 12 % 2 == 0 → call isPowerOfTwo(6)

// 6 % 2 == 0 → call isPowerOfTwo(3)

// 3 % 2 !== 0 → return false

// 👉 Output: false