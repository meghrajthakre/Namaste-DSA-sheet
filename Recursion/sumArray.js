//  sum of all in the array using recursion;


// Array of numbers
let arr = [5, 10, 2, 4];

// Recursive function to calculate sum
function sum(n) {
    // Base case: when index is 0, return the first element
    if (n == 0) return arr[0];

    // Recursive case:
    // Take current element arr[n] and add it to the sum of all elements before it
    return arr[n] + sum(n - 1);
}

// Call the function with the last index of the array
let result = sum(arr.length - 1);

// Print the final sum
console.log(result);  // Output: 21
