// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.
var checkInclusion = function (s1, s2) {
    // Frequency arrays for characters in s1 and current window in s2
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);

    // The window size is equal to the length of s1
    let window_length = s1.length;

    // Initialize both hashes with the first window of s2 and full s1
    for (let i = 0; i < window_length; i++) {
        hashS[s1.charCodeAt(i) - 97]++; // Count char in s1
        hashW[s2.charCodeAt(i) - 97]++; // Count char in initial window of s2
    }

    // Sliding window pointers
    let i = 0;
    let j = window_length - 1;

    // Slide the window over s2
    while (j < s2.length) {
        // If both frequency arrays match, it's a permutation
        if (isValidWindow(hashS, hashW)) {
            return true;
        } else {
            // Remove leftmost char from window
            hashW[s2.charCodeAt(i) - 97]--;
            i++;

            // Move window ahead
            j++;
            if (j < s2.length) {
                hashW[s2.charCodeAt(j) - 97]++; // Add new rightmost char
            }
        }
    }

    return false; // No permutation found
};

// Helper function to compare two frequency arrays
const isValidWindow = (hashS, hashW) => {
    for (let i = 0; i < 26; i++) {
        if (hashS[i] !== hashW[i]) {
            return false; // Frequency mismatch → not a valid permutation
        }
    }
    return true; // All counts match
};
