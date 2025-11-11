// 392. Is Subsequence
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

let i = 0; // pointer for s
let j = 0; // pointer for t

while (j < t.length) {
    if (s[i] === t[j]) {
        i++; // move pointer in s
        j++; // move pointer in t
    } else {
        j++; // only move pointer in t
    }
}

return i === s.length; // true if all chars in s matched
