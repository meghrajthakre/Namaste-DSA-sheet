// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
    let stack = []
    let map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i])
        }

        else {
            let top = stack.pop()
            if (!top || s[i] !== map[top]) {

                return false
            }
        }

    }

    return stack.length == 0
};
const res = isValid("(]");
console.log(res);
