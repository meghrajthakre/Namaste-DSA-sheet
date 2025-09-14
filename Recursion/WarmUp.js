// Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem.

// 👉 The idea is to break a big problem into smaller subproblems of the same type until we reach a simple base case (the stopping condition).

// Structure of Recursion

// Base case – condition where the function stops calling itself.

// Recursive case – where the function keeps calling itself with smaller/simpler inputs.



function recursion(num) {
    if (num < 0) return; // base case 
    console.log(num);

    recursion(--num) // recursive case 

}

let a = 100;
recursion(a)


function factorial(n) {
    if (n === 0 || n === 1) {   // Base case
        return 1;
    }
    return n * factorial(n - 1);  // Recursive case
}

console.log(factorial(5)); // Output: 120
