
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
