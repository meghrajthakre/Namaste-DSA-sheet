// 28. Find the Index of the First Occurrence in a String

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


var strStr = function (haystack, needle) {
    // Get the lengths of both strings
    let hy = haystack.length; // length of haystack
    let nee = needle.length;  // length of needle

    // Loop over haystack, stopping so that there's enough characters left to match needle
    for (let i = 0; i <= hy - nee; i++) {
        let j = 0; // pointer for needle
        
        // Compare each character of needle with substring of haystack starting at i
        for (j = 0; j < nee; j++) {
            // If characters don't match, break out of inner loop
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        
        // If we finished inner loop (all characters matched), return starting index i
        if (j == nee) {
            return i;
        }
    }

    // If no match found in the entire haystack, return -1
    return -1;
};
