
var lengthOfLastWord = function (s) {
    // Start from the last character of the string
    let n = s.length - 1;

    // Step 1: Skip all the trailing spaces at the end of the string
    // Example: "Hello World  " → move 'n' left until it points to 'd'
    while (n >= 0) {
        if (s[n] !== ' ') {     // Found a non-space character
            break;
        }
        n--;                    // Keep moving left while spaces are found
    }

    // Step 2: Count the characters of the last word
    let count = 0;
    while (n >= 0) {
        if (s[n] !== ' ') {     // As long as it's not a space, it's part of the word
            count++;            // Increase the count for each character
            n--;                // Move one step left
        } else {                // If a space is found, stop counting (word ended)
            break;
        }
    }

    // Step 3: Return the total count of characters in the last word
    return count;
};


// solution 2

var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    while (n >= 0 && s[n] == " ") {
        n--
    }

    let count = 0

    while (n >= 0 && s[n] !== " ") {
        count++
        n--
    }
    return count
};

// solution 3

var lengthOfLastWord = function (s) {
    let n = s.length - 1;
    let count = 0

    while (n >= 0) {
        if (s[n] !== " ") {
            count++
        }
        else if (count > 0) {
            break
        }
        n--
    }
    
    return count
};
