// You are given a string s consisting of lowercase English letters ('a' to 'z').

// Your task is to:

// Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
// Find the consonant (all other letters excluding vowels) with the maximum frequency.
// Return the sum of the two frequencies.

// Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.

// The frequency of a letter x is the number of times it occurs in the string.

var maxFreqSum = function (s) {
    let map = {}
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
    }

    let vowels = ['a', 'e', 'i', 'o', 'u']
    let maxVowel = 0;
    let maxConsonent = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (map[s[i]] > maxVowel) {
                maxVowel = map[s[i]]
            }
        }
        else {
            if (map[s[i]] > maxConsonent) {
                maxConsonent = map[s[i]]
            }
        }
    }
    return maxVowel + maxConsonent
};

// 💡 Step-by-Step Approach (using for loop):

// Convert the string to lowercase (for uniform comparison).

// Create a map (object) to count frequency of each character.

// Loop through the string:

// If the character is a letter (a-z),

// Add it to map and increase its count.

// After counting:

// Check which vowel (a, e, i, o, u) has the highest frequency.

// Check which consonant has the highest frequency (not in vowels).