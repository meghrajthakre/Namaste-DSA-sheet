// 49 Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    // Step 1️⃣: Create a map to group all anagrams together
    let map = {}

    // Step 2️⃣: Loop through every string in the input array
    for (let i = 0; i < strs.length; i++) {
        let arr = Array(26).fill(0);  // Frequency array for 26 lowercase alphabets
        let s = strs[i];              // Current string

        // Step 3️⃣: Count the frequency of each character
        for (let j = 0; j < s.length; j++) {
            // Convert character to its alphabet index (e.g., 'a' → 0, 'b' → 1)
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            arr[index]++;  // Increase count for that character
        }

        // Step 4️⃣: Create a unique key based on frequency array
        // Example: "eat" → a1e1t1b0c0... (unique for all its anagrams)
        let key = "";
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k) + arr[k];
        }

        // Step 5️⃣: Group strings having the same frequency key
        if (!map[key]) {
            map[key] = [s];     // If key doesn’t exist, start a new group
        } else {
            map[key].push(s);   // If key exists, add to existing group
        }
    }

    // Step 6️⃣: Return all grouped values as an array
    return [...Object.values(map)];
};
