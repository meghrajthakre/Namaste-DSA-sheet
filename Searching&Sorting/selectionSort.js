function selectionSort(arr) {
    let n = arr.length;

    // Outer loop -> har position ke liye
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i; // assume current index is minimum

        // Inner loop -> baaki array me minimum dhoondo
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // update minIndex
            }
        }

        // Agar minIndex change hua -> swap karo
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example
let arr = [64, 25, 12, 22, 11];
console.log("Sorted Array:", selectionSort(arr));


// 📌 Dry Run (Example: [64, 25, 12, 22, 11])

// Pass 1 (i = 0):

// Min = 11 (index 4)

// Swap 64 ↔ 11 → [11, 25, 12, 22, 64]

// Pass 2 (i = 1):

// Min = 12 (index 2)

// Swap 25 ↔ 12 → [11, 12, 25, 22, 64]

// Pass 3 (i = 2):

// Min = 22 (index 3)

// Swap 25 ↔ 22 → [11, 12, 22, 25, 64]

// Pass 4 (i = 3):

// Min = 25 (already correct, no swap)

// [11, 12, 22, 25, 64]

// 👉 Final Sorted Array = [11, 12, 22, 25, 64]