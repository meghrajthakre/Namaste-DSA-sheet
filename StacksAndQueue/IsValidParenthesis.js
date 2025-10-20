// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
    let stack = []  // 👉 empty stack to store opening brackets
    let map = {     // 👉 pairs of opening and closing brackets
        '(': ')',
        '{': '}',
        '[': ']'
    }

    // 👉 loop through each character of string
    for (let i = 0; i < s.length; i++) {
        let char = s[i]   // current character

        // 👉 if it's an opening bracket
        if (map[char]) {
            stack.push(char)  // push to stack
        } 
        else {  // 👉 if it's a closing bracket
            let top = stack.pop()  // remove last opening bracket

            // 👉 if no matching opening or brackets not same
            if (!top || s[i] !== map[top]) {
                return false  // invalid parentheses
            }
        }

        // 👉 (Just for understanding) print stack after every step
        console.log("After '" + char + "':", stack)
    }

    // 👉 if stack empty -> all matched
    return stack.length == 0
};

isValid("({[]})")

