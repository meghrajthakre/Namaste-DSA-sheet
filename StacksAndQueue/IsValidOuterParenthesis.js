// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

 

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".


// 1st Aproach

var removeOuterParentheses = function (s) {
    let stack = [];
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            // if already inside some parentheses
            if (stack.length > 0) {
                ans += s[i]; // add inner '('
            }
            stack.push('('); // push to stack
        } 
        else {
            stack.pop(); // closing one '('
            
            // only add ')' if it's not closing the outermost one
            if (stack.length > 0) {
                ans += s[i];
            }
        }
    }

    return ans;
}



// second Aproach
var removeOuterParentheses = function(s) {
    let level = -1;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++level;
            ans += (level ? s[i] : "");
        } else {
            ans += (level ? s[i] : "");
            --level;
        }
    }
    return ans;
};