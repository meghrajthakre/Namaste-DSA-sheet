var isPalindrome = function (x) {
    if (x < 0) return false; // negative numbers can't be palindrome

    let xCopy = x;
    let rev = 0;

    while (x > 0) {
        let rem = x % 10;       // last digit nikala
        rev = (rev * 10) + rem; // reverse banaya
        x = Math.floor(x / 10); //  x ko update karna tha
    }

    return rev === xCopy;
};

let res = isPalindrome(121);
console.log(res);
