function isSorted(arr, index = 0) {
    // Base case: reached the last element
    if (index >= arr.length - 1) return true;

    // Check current pair
    if (arr[index] > arr[index + 1]) return false;

    // Recursive check for rest of array
    return isSorted(arr, index + 1);
}

// Examples
console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([1, 3, 2, 4]));    // Output: false
