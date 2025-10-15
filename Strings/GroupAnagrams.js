// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:
// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

var groupAnagrams = function (strs) {
    // Create an empty object to store grouped anagrams
    let map = {}

    // Loop through each string in the input array
    for (let i = 0; i < strs.length; i++) {

        // Split the string into characters, sort them alphabetically, and join back into a string
        // This sorted version will act as a unique key for anagram groups
        let sortChar = strs[i].split('').sort().join('');

        // If this key (sorted word) does not exist in map, create a new array
        if (!map[sortChar]) {
            map[sortChar] = [strs[i]]
        } 
        // Otherwise, push the current word into the existing array
        else {
            map[sortChar].push(strs[i])
        }
    }

    // Convert the map values (arrays of grouped anagrams) into a single array and return
    return [...Object.values(map)]
};
