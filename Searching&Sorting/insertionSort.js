function insertionSort(arr) {
    let n = arr.length;

    // Start from the second element (index 1) because the first element is already "sorted"
    for (let i = 1; i < n; i++) {
        let key = arr[i];          // The element we want to insert in the sorted part
        let prev = i - 1;          // Index of the last element in the sorted part

        // Move elements of the sorted part that are greater than key one position ahead
        while (prev >= 0 && arr[prev] > key) {
            arr[prev + 1] = arr[prev];  // Shift element to the right
            prev--;                     // Move to the previous element
        }

        // Insert the key at its correct position in the sorted part
        arr[prev + 1] = key;
    }

    return arr;  // Return the sorted array
}

// Example usage
let arr = [5, 1, 2, 9, 76, 48, 5];
let res = insertionSort(arr);
console.log(res);  // Output: [1, 2, 5, 5, 9, 48, 76]



// Explanation of Comments

// key = arr[i] → This is the element you are trying to place in the correct position.

// prev = i - 1 → Start comparing with the last element of the already sorted part.

// while (prev >= 0 && arr[prev] > key) → Keep shifting elements right if they are bigger than key.

// arr[prev + 1] = key → Place the key in the correct spot.




// Step 1: i = 1 (key = 1)

// Compare 1 with 5 → 5 > 1 → shift 5 → [5, 5, 2, 9, 76, 48, 5]

// Insert 1 at index 0 → [1, 5, 2, 9, 76, 48, 5]

// Step 2: i = 2 (key = 2)

// Compare 2 with 5 → 5 > 2 → shift 5 → [1, 5, 5, 9, 76, 48, 5]

// Compare 2 with 1 → 1 < 2 → stop

// Insert 2 at index 1 → [1, 2, 5, 9, 76, 48, 5]

// Step 3: i = 3 (key = 9)

// Compare 9 with 5 → 5 < 9 → stop

// Insert 9 at index 3 → [1, 2, 5, 9, 76, 48, 5] (no change)

// Step 4: i = 4 (key = 76)

// Compare 76 with 9 → 9 < 76 → stop

// Insert 76 at index 4 → [1, 2, 5, 9, 76, 48, 5] (no change)

// Step 5: i = 5 (key = 48)

// Compare 48 with 76 → 76 > 48 → shift 76 → [1, 2, 5, 9, 76, 76, 5]

// Compare 48 with 9 → 9 < 48 → stop

// Insert 48 at index 4 → [1, 2, 5, 9, 48, 76, 5]

// Step 6: i = 6 (key = 5)

// Compare 5 with 76 → 76 > 5 → shift 76 → [1, 2, 5, 9, 48, 76, 76]

// Compare 5 with 48 → 48 > 5 → shift 48 → [1, 2, 5, 9, 48, 48, 76]

// Compare 5 with 9 → 9 > 5 → shift 9 → [1, 2, 5, 9, 9, 48, 76]

// Compare 5 with 5 → 5 == 5 → stop

// Insert 5 at index 2 → [1, 2, 5, 5, 9, 48, 76]

// ✅ Final Sorted Array:

// [1, 2, 5, 5, 9, 48, 76]