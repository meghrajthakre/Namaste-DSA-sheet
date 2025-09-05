// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

var reverseString = function (s) {
    let len = s.length;                   // total characters
    let halfLen = Math.floor(len / 2);    // only need to swap half

    for (let i = 0; i < halfLen; i++) {
        let temp = s[i];                  // store left character
        s[i] = s[len - 1 - i];            // copy right → left
        s[len - 1 - i] = temp;            // copy temp → right
    }
};
let arr = ["h","e","l","l","o"];
reverseString(arr);
console.log(arr); // ["o","l","l","e","h"]


for (let i = 0; i < Math.floor(s.length / 2); i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]; // ES6 swap
}
