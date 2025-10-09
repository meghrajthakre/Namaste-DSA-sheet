// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

// Given a balanced string s, split it into some number of substrings such that:

// Each substring is balanced.
// Return the maximum number of balanced strings you can obtain.




function balancedStringSplit(s) {
    let count = 0;   // balance tracker
    let result = 0;  // total balanced substrings

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'L') {
            count++;
        } else if (s[i] === 'R') {
            count--;
        }

        if (count === 0) {
            result++;
        }
    }

    return result;
}

// Example
console.log(balancedStringSplit("RLRRLLRLRL")); // Output: 4

// 💡 Approach (using for loop):

// Ek variable count rakho jo 'L' aur 'R' ka balance track kare.

// 'L' aane par count++

// 'R' aane par count--

// Jab bhi count === 0 ho jaye, ek balanced substring mil gayi → result++.

// Loop poora hone ke baad result return karo.