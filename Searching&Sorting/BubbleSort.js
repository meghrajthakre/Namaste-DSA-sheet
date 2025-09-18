
// 🔥 Optimized Bubble Sort Code
function bubbleSortOptimized(arr) {
    let n = arr.length;

    // Outer loop for passes
    for (let i = 0; i < n - 1; i++) {
        let swapped = false; // check karega ki pass me koi swap hua ya nahi

        // Inner loop for adjacent comparison
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true; // swap hua
            }
        }

        // Agar ek bhi swap nahi hua -> array already sorted hai
        if (!swapped) break;
    }

    return arr;
}

// Example
let arr = [1, 2, 3, 4, 5]; // already sorted
console.log("Sorted Array:", bubbleSortOptimized(arr));


// Dry Run Example

// Array = [5, 3, 1, 4, 2]

// Pass 1:

// Compare 5 & 3 → swap → [3, 5, 1, 4, 2]

// Compare 5 & 1 → swap → [3, 1, 5, 4, 2]

// Compare 5 & 4 → swap → [3, 1, 4, 5, 2]

// Compare 5 & 2 → swap → [3, 1, 4, 2, 5]
// 👉 Largest (5) last me chala gaya

// Pass 2:

// Compare 3 & 1 → swap → [1, 3, 4, 2, 5]

// Compare 3 & 4 → no swap

// Compare 4 & 2 → swap → [1, 3, 2, 4, 5]
// 👉 2nd largest (4) apni jagah aa gaya

// Pass 3:

// Compare 1 & 3 → no swap

// Compare 3 & 2 → swap → [1, 2, 3, 4, 5]

// Pass 4:

// Compare 1 & 2 → no swap (already sorted)

// ✅ Final Sorted Array = [1, 2, 3, 4, 5]