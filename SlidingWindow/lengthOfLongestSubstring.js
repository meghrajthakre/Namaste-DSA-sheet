// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without duplicate characters.
var lengthOfLongestSubstring = function (str) {
    let i = 0;                  // Left pointer of window
    let j = 0;                  // Right pointer of window
    let map = new Set();        // Will store last index of each character
    let maxWS = 0;              // Maximum window size (longest substring)

    // Move right pointer through the string
    for (j = 0; j < str.length; j++) {

        // If current character already seen AND inside the current window
        if (map[str[j]] != undefined && map[str[j]] >= i) {
            // Move left pointer ahead of the previous occurrence
            i = map[str[j]] + 1;
        }

        // Update last seen index of current character
        map[str[j]] = j;

        // Calculate current window size
        let currWS = j - i + 1;

        // Update max window size
        maxWS = Math.max(maxWS, currWS);
    }

    return maxWS;
};

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 