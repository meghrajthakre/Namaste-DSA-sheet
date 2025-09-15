// Array of numbers
let arr = [5, 10, 2, 4, 9];

function sum(n) {
    // Check if current element is odd
    let isOdd = arr[n] % 2 !== 0;

    // Base case: when at first element (index 0)
    if (n == 0) {
        // If it's odd return it, otherwise return 0
        return isOdd ? arr[0] : 0;
    }

    // Recursive case:
    // If current element is odd, include it; otherwise add 0
    return (isOdd ? arr[n] : 0) + sum(n - 1);
}

// Start recursion from last index
let result = sum(arr.length - 1);

console.log(result);  // Output: 14




// 🔎 Dry Run (step by step)

// arr = [5, 10, 2, 4, 9]

// sum(4) → arr[4] = 9 → odd ✅ → 9 + sum(3)

// sum(3) → arr[3] = 4 → even ❌ → 0 + sum(2)

// sum(2) → arr[2] = 2 → even ❌ → 0 + sum(1)

// sum(1) → arr[1] = 10 → even ❌ → 0 + sum(0)

// sum(0) → arr[0] = 5 → odd ✅ → return 5

// Now substitute back:

// sum(0) = 5
// sum(1) = 0 + 5 = 5
// sum(2) = 0 + 5 = 5
// sum(3) = 0 + 5 = 5
// sum(4) = 9 + 5 = 14