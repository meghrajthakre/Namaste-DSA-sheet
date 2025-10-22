// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

var evalRPN = function (arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+" || arr[i] == "-" || arr[i] == "*" || arr[i] == "/") {
            let a = stack.pop();
            let b = stack.pop();
            let ans = eval(`${b} ${arr[i]} ${a}`);
            stack.push(Math.trunc(ans))
        }
        else {
            stack.push(arr[i])
        }
    }
    return Number(stack.pop())
};