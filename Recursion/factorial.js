// (n! = n × (n-1) × (n-2) … × 1)

function fact(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n == 0) return 1;

    // Recursive case: multiply current n with factorial of (n-1)
    return n * fact(n - 1);
}

// Find factorial of 5
let result = fact(5);

console.log(result);  // Output: 120


// 🔎 Dry Run (factorial of 5)
// sum(5) = 5 * sum(4)
// sum(4) = 4 * sum(3)
// sum(3) = 3 * sum(2)
// sum(2) = 2 * sum(1)
// sum(1) = 1 * sum(0)
// sum(0) = 1   (base case)


// Now substitute back:

// sum(1) = 1 * 1 = 1
// sum(2) = 2 * 1 = 2
// sum(3) = 3 * 2 = 6
// sum(4) = 4 * 6 = 24
// sum(5) = 5 * 24 = 120


// ✅ Final Answer → 120